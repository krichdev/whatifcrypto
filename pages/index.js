import { useState } from "react";
import Image from "next/image";

import CryptoSelect from "./components/cryptoSelect";
import CryptoInput from "./components/cryptoInput";
import DatePicker from "./components/datePicker";
import { DateTime } from "luxon";

export default function Home({ data }) {
  const [amount, setAmount] = useState("100");
  const [selected, setSelected] = useState(data[0] || undefined);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [price, setPrice] = useState("");
  const [isCalcActive, setIsCalcActive] = useState(true);

  const calculateWhatIfPrice = async () => {
    const formatDate = DateTime.fromISO(date).toFormat("dd-MM-yyyy");
    const res = await fetch(
      `/api/historicalPrice?id=${selected.id}&date=${formatDate}`,
      {
        method: "GET",
      }
    );
    const priceData = await res.json();
    const qtyPurchased = amount / priceData.data.market_data.current_price.usd;
    const currentValue = qtyPurchased * selected.current_price;
    setIsCalcActive(false);
    setPrice(currentValue);
  };

  return (
    <div className="flex flex-col items-center h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20">
        <Image
          src="/whatifcryptologo.png"
          alt="What If Crypto Logo"
          width="250"
          height="50"
        />
        <div className="w-full md:w-1/2 py-4 px-8 bg-white rounded-lg my-20">
          {isCalcActive ? (
            <>
              <CryptoInput amount={amount} handleChangeAmount={setAmount} />
              <CryptoSelect
                data={data}
                selected={selected}
                handleChangeSelected={setSelected}
              />
              <DatePicker date={date} handleDateChange={setDate} />
              <button
                className="
                bg-gray-800
                w-full
                hover:bg-gray-700
                text-white
                font-bold
                py-2
                px-4
                rounded"
                onClick={calculateWhatIfPrice}
              >
                Calculate
              </button>
            </>
          ) : (
            <div>
              <span>
                Your ${amount} investment would be worth ${price.toFixed(2)}{" "}
                today
                {price > amount ? "\u{1F4C8}" : "\u{1F4C9}"}
              </span>
              <button
                className="
                bg-gray-800
                w-full
                hover:bg-gray-700
                text-white
                font-bold
                py-2
                px-4
                rounded"
                onClick={() => setIsCalcActive(true)}
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
        "x-rapidapi-key": "dec4b809b3msh52274bb224e48a6p1535afjsne950e342ae82",
      },
    }
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
