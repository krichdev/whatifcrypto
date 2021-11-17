export default async function historicalPriceAPI(req, res) {
  const { query } = req;
  const { id, date } = query;
  if (!query) {
    return res.status(400).json({ error: "Please provide inputs" });
  }

  if (!id) {
    return res.status(400).json({ error: "Please provide a coin id" });
  }

  if (!date) {
    return res.status(400).json({ error: "Please provide a date" });
  }

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
