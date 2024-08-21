# Azure Static Web Apps + tRPC

Type-Safety + Azure + Serverless = TAS Stack

## Run

```bash
bun install
bun dev
```

Open http://localhost:5173/

Check it out https://victorious-water-019ecb600-preview.eastasia.5.azurestaticapps.net 

## Deploy
```
bun run build
bun run deploy --app-name thw-demo-serverless-front
```

## tRPC
> but note that you cannot use trpc v10 with react-query v5, they are structurally incompatible. the trpc team is working on v11, which will be RQ v5 compatible. You can already try it out with the @trpc/react-query@next tag.
https://github.com/TanStack/query/issues/6186#issuecomment-1772356489

## Azure SWA CLI

The slow method using Azure Static Web Apps CLI as a reverse proxy to the Vite server
https://github.com/Azure/static-web-apps-cli/issues/736

```json
{ 
  "scripts": {
    "dev": "run-p -l 'dev:*'",
    "start": "vite",
    "build:api": "esbuild src/server/main.ts --bundle --platform=node --external:@azure/functions-core --outfile=src/server/dist/main.js",
    "dev:swa": "swa start http://localhost:5173 --run \"npm run start\" --api-location src/server --port 3000 --api-devserver-url http://127.0.0.1:3030",
    "dev:func": "run-s build:api && nodemon --watch src/server --ext ts --exec 'run-s build:api'",
    "dev:start": "func start -w --prefix src/server/ --cors-credentials --port 3030"
  }
}
```

### SWA Alternatives

[Static Web Apps CLI: improve performance with Vite server proxy](https://johnnyreilly.com/static-web-apps-cli-improve-performance-with-vite-server-proxy)
  - Use Vite to proxy requests to the Azure Functions backend instead of the SWA CLI

## T3 Stack

Some code and patterns are inspired by the T3 Stack, and Next.js Struture