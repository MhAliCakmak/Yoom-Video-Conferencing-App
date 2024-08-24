import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-6 lg:px-10">
      <Link href="/">
        <Image src={"/icons/logo.png"} width={32} height={32} alt="Yoom Logo"/>
      </Link>
    </nav>
  );
};

export default Navbar;
