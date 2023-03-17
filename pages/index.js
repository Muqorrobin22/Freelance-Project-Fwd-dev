import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>FWD Development</title>
      </Head>

      <Header />
      <Main />
    </>
  );
}
