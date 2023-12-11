"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { status }: { status: string } = useSession();
  return (
    <>
      <nav className="bg-sky-700 px-[7%] py-5 fixed top-0 left-0 right-0 border-b-[1px] z-10 flex items-center justify-between">
        <div>
          <ul className="flex items-center font-semibold text-white text-sm sm:text-base ">
            <Link href="/">
              <li
                className={`mr-3 ${
                  pathname === "/" ? "text-blue-300" : "text-white"
                } `}
              >
                Home
              </li>
            </Link>
            <Link href="/blogs">
              <li
                className={`mr-3 ${
                  pathname === "/blogs" ? "text-blue-300" : "text-white"
                } `}
              >
                Blog
              </li>
            </Link>
            <Link href="/project">
              <li
                className={`mr-3 ${
                  pathname === "/project" ? "text-blue-300" : "text-white"
                } `}
              >
                Project
              </li>
            </Link>
            <Link href="/library">
              <li
                className={`mr-3 ${
                  pathname === "/library" ? "text-blue-300" : "text-white"
                } `}
              >
                Library
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`mr-3 ${
                  pathname === "/about" ? "text-blue-300" : "text-white"
                } `}
              >
                About
              </li>
            </Link>
          </ul>
        </div>
        <div>
          {status === "authenticated" ? (
            <button
              className="bg-white text-blue-300 rounded-md px-3 py-1 cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-white text-blue-300 rounded-md px-3 py-1 cursor-pointer"
              onClick={() => signIn()}
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
