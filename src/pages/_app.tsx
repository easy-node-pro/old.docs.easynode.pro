// pages/_app.js
import { GoogleAnalytics } from "nextjs-google-analytics";
import type { ReactElement } from "react";
import type { AppProps } from "next/app";

export default function Nextra({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}
