import Image from "next/image";
import CustomButton from "../shared/CustomButton";
import Link from "next/link";
import SignInButton from "./SignInButton";
const Nav = () => {
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
            <li>
              <Link href="/signIn">Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
