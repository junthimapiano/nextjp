import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Chawakorn's Lab",
  description: "This is a website for learning Next.js",
  image: "",
};

export default function Home() {
  return (
    <>
    <div className="flex justify-center">
      <div className="text-center">
        <p className="text-3xl">Welcome to pokemon </p>
        <p className="text-lg">YOU LOVE POKEMON? <span className="font-bold">Next.js</span>  <span className="font-bold"></span></p>
        <Link href={"/aboutme"} className="text-blue-500">
          <span className="font-bold">ข้อมูลเพิ่มเติม</span>
        </Link>
      </div>
    </div>
    </>
  );
}