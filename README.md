# Landing

Personal developer site at [www.monoroh.com](https://www.monoroh.com): projects, app pages and their legal documents. React 18, Vite, TypeScript, react-router.

## Pages

| Path | Page |
|---|---|
| `/` | Home with the project list from `src/data/projects.ts` |
| `/tossling`, `/tossling/privacy` | Tossling and its privacy policy |
| `/authmeister`, `/authmeister/privacy`, `/authmeister/terms` | Authmeister, privacy policy, terms of use |
| `/sightra/privacy`, `/sightra/terms` | Sightra privacy policy and terms of use |
| `/kcalm`, `/kcalm/privacy`, `/kcalm/delete-account` | kcalm, its privacy policy and account deletion |
| `/privacy`, `/terms` | Site-wide privacy policy and terms |

UI strings live in `src/i18n/translations.ts`. `public/.well-known/apple-app-site-association` serves the universal links for the iOS apps. GitHub Pages has no SPA fallback, so `public/404.html` redirects unknown paths to the root with the path in the query string and the router picks it up.

## Development

Yarn 4 through Corepack:

```sh
corepack enable
yarn install
yarn dev          # local server
yarn test:run     # vitest once
yarn lint
yarn build        # tsc and vite build into dist/
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages with hidden files included, so `.well-known` gets deployed too. The custom domain comes from `CNAME`.
