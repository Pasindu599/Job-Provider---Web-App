"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/jobs/${search}`);
  };

  return (
    <div className="flex flex-grow  flex-col mx-7 items-center text-center  justify-center mt-5 py-12 ">
      <h1 className="text-4xl ">
        Welcome to <span className="text-blue-500 font-bold">Job Provider</span>
      </h1>
      <p className="text-lg mt-5 mx-5">
        Find your dream job here. We have a lot of job listings for you.
      </p>
      {/* <p className="text-lg mt-7 mx-5 border hover:bg-gray-700 hover:text-white border-black p-5 items-center rounded-2xl">
        <a href="/jobs" className="font-bold">
          Start your search now.
        </a>
      </p> */}
      {/* <div className="flex flex-grow flex-col gap-3 mt-7">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for jobs"
          className="border  outline-none focus:outline-none p-2 rounded-md"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link href={`/jobs/${search}`}>
          <button className="text-md md:text-lg font-bold mt-3 mx-5 border hover:bg-white hover:text-black text-white bg-black border-black p-2 md:p-5 items-center rounded-2xl">
            Start your search now
          </button>
        </Link>
      </div> */}
    </div>
  );
}

export default Hero;
