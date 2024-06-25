import Link from "next/link";
import React from "react";
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";

async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();

  return (
    <header className="flex sticky z-10 h-14 bg-slate-200 flex-row  items-center justify-between  px-3 md:px-5 lg:px-10">
      <div className="flex  items-center gap-1">
        <img src="/logo.svg" alt="Job Provider" className="h-10" />
        <Link href={"/"}>
          Job <span className="font-bold ">Provider</span>
        </Link>
      </div>

      <nav>
        <ul className="hidden md:flex  flex-row gap-7 ">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/jobs"}>Jobs</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </nav>

      <div className="hidden md:flex gap-5 items-center ">
        {!user && (
          <Link
            href={signInUrl}
            className="border rounded-md border-black p-1 px-3 hover:bg-slate-500 hover:text-white "
          >
            Login
          </Link>
        )}
        {user && (
          <>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="border rounded-md border-black p-1 px-3 hover:bg-slate-500 hover:text-white "
              >
                Sign Out
              </button>
            </form>
            <Link
              href={"/new-listing"}
              className="border border-blue-900 bg-slate-500 text-white hover:bg-slate-600 rounded-md p-1 px-3 "
            >
              Add a job
            </Link>
          </>
        )}
      </div>

      <div className="flex flex-col md:hidden gap-2">
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </div>
    </header>
  );
}

export default Header;
