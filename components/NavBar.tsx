import Image from "next/image";
import CustomButton from "../shared/CustomButton";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            height={18}
            width={118}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title={`Sign In`}
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Nav;
