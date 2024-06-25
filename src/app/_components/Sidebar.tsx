import React from "react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="hidden  p-7 flex-col absolute z-50 h-screen bg-slate-500">
      <div className="flex  items-center gap-1">
        <img src="/logo.svg" alt="Job Provider" className="h-10" />
        <Link href={"/"}>
          Job <span className="font-bold ">Provider</span>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mx-auto my-auto ">
        <ul className="hidden md:flex  justify-center items-center flex-col gap-10 ">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/jobs"}>Jobs</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link
              href={"/login"}
              className="border rounded-md border-black p-1 px-3 hover:bg-slate-500 hover:text-white "
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href={"/new-listing"}
              className="border border-white bg-white text-black hover:bg-slate-200 rounded-md p-1 px-3 "
            >
              Add a job
            </Link>
          </li>
        </ul>
      </div>

      <div></div>
    </div>
  );
}

export default Sidebar;
