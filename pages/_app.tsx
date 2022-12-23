import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

import { UserProvider } from "../context/UserContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
