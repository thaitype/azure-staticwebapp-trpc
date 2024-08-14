import { azureFunctionsRequestHandler } from 'trpc-azure-functions-adapter';
import { appRouter } from './api/root';
import { createContext } from './api/trpc';

azureFunctionsRequestHandler({
  router: appRouter,
  createContext,
});