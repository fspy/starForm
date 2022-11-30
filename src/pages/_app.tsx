import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const methods = useForm();
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...methods}>
        <Component {...pageProps} />
      </FormProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
