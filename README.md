# edward-lowassa-lekor

Next.js mini-site for the Lowassa Edward Lekor Lormuje PST 2026/27 campaign. Review candidate details, campaign priorities, and privacy wording with the campaign before public launch.

## Frontend mock

1. Install Node.js 22 or newer.
2. Run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.

The poll and supporter forms are presentation-only in this mock. They do not send or store submitted information. The Neon schema and API routes are retained for the later backend integration.

## Vercel deployment

1. Push this project to a GitHub repository and import it from the Vercel dashboard. Vercel detects Next.js and uses its standard build settings.
2. Deploy the mock without database environment variables.

When the backend is ready, add `DATABASE_URL` in Vercel Project Settings → Environment Variables and redeploy. `.env*` files are intentionally excluded from Git.

## Hetzner deployment

For the later backend deployment, build and run the included Dockerfile on a Hetzner Cloud server, provide `DATABASE_URL` as a runtime secret, and put a TLS-enabled reverse proxy (for example Caddy) in front of port 3000.
