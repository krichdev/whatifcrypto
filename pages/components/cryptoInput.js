import { Listbox } from "@headlessui/react";

export default function CryptoInput({ amount, handleChangeAmount }) {
  return (
    <div className="my-12">
      <Listbox>
        <Listbox.Label className="block text-sm font-medium text-gray-700">
          Amount (USD)
        </Listbox.Label>
        <div className="mt-1 relative">
          <input
            type="number"
            className="
                  block
                  w-full
                  truncate
                  bg-white
                  border
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:outline-none
                  focus:ring-1
                  focus:ring-indigo-500
                  focus:border-indigo-500
                "
            placeholder="100"
            onChange={(e) => handleChangeAmount(e.target.value)}
            value={amount}
          />
        </div>
      </Listbox>
    </div>
  );
}
