export default async function historicalPriceAPI(req, res) {
  const { query } = req;
  const { id, date } = query;
  const fetchHistoricalPrice = await fetch(
    `https://coingecko.p.rapidapi.com/coins/${id}/history?date=${date}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
        "x-rapidapi-key": "dec4b809b3msh52274bb224e48a6p1535afjsne950e342ae82",
      },
    }
  );
  const data = await fetchHistoricalPrice.json();
  res.status(200).json({ data });
}
