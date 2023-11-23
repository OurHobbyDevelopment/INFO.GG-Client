"use client";

import { Reset } from "styled-reset";
import * as React from "react";
// export const metadata = {
//   title: "INFO.GG",
//   description: "발로란트 정보를 공유하는 사이트",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <React.Fragment>
        <Reset />
        <body>{children}</body>
      </React.Fragment>
    </html>
  );
}
