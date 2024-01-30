import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-24 lg:px-48">
        <Component {...pageProps} />
      </div>
    </>
  );
}
