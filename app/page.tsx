import Feed from "@/components/Feed";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-center flex-col">
      <h1 className="text-dark  font-bold text-3xl text-center">
        Discover & Share
      </h1>
      <br />
      <span className=" text-center text-3xl font-bold text-red-400 ">
        AI-Powered Prompts
      </span>
      <Feed />
    </div>
  );
}
