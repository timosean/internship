import Header from "@/components/Header";
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className={`${inter.className} px-[16px]`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
