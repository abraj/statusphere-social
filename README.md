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

### TODO

Account management interface on the reference PDS implementation 
- https://pds.me/account

TypeScript OAuth Authorization server implementation (`@atproto/oauth-provider`) 
- https://chatgpt.com/c/695a7b54-b934-8322-8dc3-1d3cc3514c6d

mountPath: `/oauth` (default) [configurable using `config` option]
`/oauth/userinfo` (redirect here after login)
JSON route/response based documentation
Add lib docs in README file
