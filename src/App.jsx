import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiConfig } from 'wagmi';
import { wagmiConfig } from './utils/wagmiConfig.ts';

const router = createRouter({ routeTree });
const queryClient = new QueryClient()

// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router;
//   }
// }

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
     </WagmiConfig>
  )
}

export default App;