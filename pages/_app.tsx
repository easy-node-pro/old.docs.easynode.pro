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
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="easynodepro"
        data-description="Support me on Buy me a coffee!"
        data-message="Thanks for stopping by! If we help you stake or validate consider helping us make more content by buying us a coffee!"
        data-color="#2CEA26"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}
