# statusphere-social

**.env**  
_localhost:_ NODE_ENV (development), PORT (8080), PUBLIC_URL('')  
_production:_ NODE_ENV (production), PORT (?), PUBLIC_URL(https://statusphere.social), COOKIE_SECRET  

**Start server**
- `cp .env.template .env` and update keys `PUBLIC_URL`, `COOKIE_SECRET`, `NODE_ENV`, `PORT`
- [_dev_] `npm run dev`
- [_prod_] `npm run deploy`
- `npm run pm2:stop`
- `pm2 ls`
