// Scores a fare against what that distance normally costs, and guesses the error type.
const R = 6371;
export function km(a, b) {
  const r = x => (x * Math.PI) / 180;
  const h = Math.sin(r(b.lat - a.lat) / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(r(b.lon - a.lon) / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
// Rough typical economy price in USD, fitted to common US routes (JFK-LHR ~$630, LAX-SYD ~$1,250).
export const typical = (d, oneWay) => Math.round((110 + 0.095 * d) * (oneWay ? 0.6 : 1));

const HEAVY_SURCHARGE = new Set(["BA", "LH", "LX", "OS", "SN", "AF", "KL", "QF", "CX", "JL", "NH", "VS", "AZ", "KE", "OZ", "TP"]);
const WEAK_CURRENCY = new Set(["JP", "KR", "ID", "VN", "CO", "AR", "HU", "CZ", "IN", "LK", "CL", "TR", "NG", "EG", "KE", "GH", "PH"]);

export function classify({ ratio, rel, airline, dist, cc }) {
  if (ratio < 0.65 && ratio >= 0.3 && dist > 6000 && HEAVY_SURCHARGE.has(airline))
    return { type: "Missing fuel surcharge", why: `${airline} normally adds large surcharges on long-haul; this fare looks like they were left off.` };
  if (ratio < 0.3 && WEAK_CURRENCY.has(cc))
    return { type: "Currency conversion", why: "Destination uses a high-denomination currency, where decimal and rate mistakes are common." };
  if (rel != null && rel < 0.5 && ratio < 0.6)
    return { type: "OTA or system glitch", why: "Far below every other fare found on this route, so it likely exists on only one seller or system." };
  if (ratio < 0.3)
    return { type: "Human pricing error", why: "Priced under a third of normal with no other explanation, which fits a typo or a wrong fare-class filing." };
  return null;
}

export function scoreOffer(o, orig, dest, oneWay, med) {
  const dist = km(orig, dest), base = typical(dist, oneWay), ratio = o.price / base;
  const rel = med ? o.price / med : null;
  const c = classify({ ratio, rel, airline: o.airline, dist, cc: dest.cc });
  return { ...o, base, pctOff: Math.round((1 - ratio) * 100), type: c?.type ?? null, why: c?.why ?? null };
}
