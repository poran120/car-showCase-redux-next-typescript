import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 p-5">
      <div className="flex justify-between ">
        <div className="flex flex-col justify-start items-start gap-6 w-full">
          <Image
            src="/logo.svg"
            alt="Logo"
            height={18}
            width={118}
            className="object-contain"
          />
          <p className="text-base to-gray-700">
            Car ShowCase <br /> All rights reserved &copy;
          </p>
        </div>

        <div className="w-full flex justify-between">
          {footerLinks.map((link) => (
            <div className="flex flex-col gap-5" key={link.title}>
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  className="text-gray-700"
                  href={item.url}
                  key={item.title}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
