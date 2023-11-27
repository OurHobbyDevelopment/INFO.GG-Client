"use client";

import { Reset } from "styled-reset";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
// export const metadata = {
//   title: "INFO.GG",
//   description: "발로란트 정보를 공유하는 사이트",
// };
const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <React.Fragment>
              <Reset />
              <body>{children}</body>
            </React.Fragment>
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </html>
  );
}
