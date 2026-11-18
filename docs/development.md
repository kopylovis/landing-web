# Development

Use Node 24 and Yarn 4.9.2 as in the Pages workflow. Install dependencies with `yarn install --immutable`.

- Start the Vite app with `yarn dev`. Open the URL it prints with Playwright CLI.
- Run `yarn test:run` and `yarn build` before handing off a change.
- For page changes, check the affected routes at desktop and mobile widths. Exercise the changed links or controls and inspect failed browser requests.

When changing download links, check the target for each platform against the app's release feed.
