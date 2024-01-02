"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const { data: session, status } = useSession();
  console.log(status);
  return (
    <header className="w-full sticky z-10 drop-shadow-lg top-0 bg-slate-100">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent top-0">
        <div>
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              height={18}
              width={118}
              className="object-contain"
            />
          </Link>
        </div>
        <div>
          <ul className="flex lg:gap-[40px] md:gap-[30px] gap-[20px] font-bold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/brand">Brand</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            {/* <li>
              <button onClick={() => signIn("github")}>Sign In</button>
            </li> */}
            {status === "authenticated" && (
              <div>
                <Image
                  src={session.user?.image || "/default-user-image.jpg"}
                  alt="User Photo"
                  width={35}
                  height={35}
                />
                <button onClick={() => signOut()}>Sign Out</button>
              </div>
            )}
            <li>
              <button onClick={() => signIn("google")}>Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
