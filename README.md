# Error fare finder

Static page (`public/`) plus two Vercel serverless functions (`api/`). No build step.

## Deploy
1. Get a free token at travelpayouts.com (Aviasales Data API).
2. Push this folder to GitHub, import it in Vercel (framework preset: Other).
3. Add the environment variable `TRAVELPAYOUTS_TOKEN`, then deploy.

Local: `npm i -g vercel && vercel dev`

## Where things live
- `lib/airports.js`: origin and destination lists (add airports here)
- `lib/score.js`: typical-price model and error-type rules (tune these)
- `api/search.js`: fare lookup; swap `fetchOffers()` to change data provider
