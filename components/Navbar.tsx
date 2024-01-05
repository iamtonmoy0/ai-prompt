"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const isUserLoggedIn = true;
  return (
    <div className="w-full  flex justify-between mb-16 pt-3">
      <Link href="/" className="flex">
        <Image
          src="/assets/images/logo.svg"
          alt="AI-Prompt Logo"
          width={30}
          height={30}
        />
        <p className="ml-2 pt-1">Ai-prompt</p>
      </Link>
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 ">
            <Link
              href="/create-prompt"
              className=" border border-spacing-1 rounded-full p-2 hover:bg-black hover:text-white"
            >
              Create Post
            </Link>
            <button className=" border border-spacing-1 rounded-full p-2 hover:bg-black hover:text-white">
              Signout
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={30}
                height={30}
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
