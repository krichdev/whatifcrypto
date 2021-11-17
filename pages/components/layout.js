import Navbar from "./navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-800">
      <Head>
        <title>What If...? | Crypto FOMO Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      {children}
    </div>
  );
}
