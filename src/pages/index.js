import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Main from "../../components/Main";
import Github from "../../components/Github";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Main />
      <Github />
      <Analytics />
    </div>
  );
}
