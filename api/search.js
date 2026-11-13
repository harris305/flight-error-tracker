import { origins, dests } from "../lib/airports.js";
import { scoreOffer } from "../lib/score.js";

// Data source: Travelpayouts / Aviasales Data API (cached fares from real searches).
// To switch providers, replace fetchOffers() and keep the returned shape.
async function fetchOffers({ o, d, dep, ret, oneWay }) {
  const q = new URLSearchParams({ origin: o, destination: d, departure_at: dep, one_way: String(oneWay), currency: "usd", sorting: "price", limit: "30", market: "us" });
  if (!oneWay && ret) q.set("return_at", ret);
  const r = await fetch(`https://api.travelpayouts.com/aviasales/v3/prices_for_dates?${q}`, { headers: { "X-Access-Token": process.env.TRAVELPAYOUTS_TOKEN } });
  if (!r.ok) throw new Error(`Fare API returned ${r.status}`);
  return (await r.json()).data || [];
}

export default async function handler(req, res) {
  if (!process.env.TRAVELPAYOUTS_TOKEN) return res.status(500).json({ error: "TRAVELPAYOUTS_TOKEN is not set in the Vercel project's environment variables." });
  const { o, d, dep, ret = "" } = req.query, oneWay = req.query.oneway === "1";
  const orig = origins.find(x => x.code === o), dest = dests.find(x => x.code === d);
  if (!orig || !dest || !/^\d{4}-\d{2}$/.test(dep || "")) return res.status(400).json({ error: "Bad origin, destination or month." });
  try {
    const data = await fetchOffers({ o, d, dep, ret: ret || undefined, oneWay });
    const prices = data.map(x => x.price).sort((a, b) => a - b), med = prices.length >= 5 ? prices[Math.floor(prices.length / 2)] : null;
    const offers = data.slice(0, 5).map(x => scoreOffer({
      origin: o, dest: d, city: dest.city, price: x.price, airline: x.airline, stops: x.transfers,
      depart: x.departure_at?.slice(0, 10), back: x.return_at?.slice(0, 10), link: x.link ? `https://www.aviasales.com${x.link}` : null,
    }, orig, dest, oneWay, med));
    res.setHeader("Cache-Control", "s-maxage=900");
    res.status(200).json({ offers });
  } catch (e) { res.status(502).json({ error: e.message }); }
}
