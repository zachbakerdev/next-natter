import type { Metadata } from "next";
import React from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter";
import theme from "@/theme";
import {ThemeProvider} from "@mui/system";

export const metadata: Metadata = {
  title: "Next Natter",
  description: "An open-source alternative to Discord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
