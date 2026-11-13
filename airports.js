import { origins, dests, regions } from "../lib/airports.js";
export default function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=86400");
  res.status(200).json({ origins, dests, regions });
}
