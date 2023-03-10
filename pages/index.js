import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <h1>Home</h1>
         <a href='/about'>About</a> 
    </>
  );
}
