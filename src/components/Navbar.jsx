"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const menuList = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Notes", href: "/notes" },
  ];

  return (
    <nav className="min-h-[80px] shrink-0 flex flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10 border-b border-gray-200 shadow-md bg-white">
      <Link
        href="/"
        className="flex items-center gap-2 sm:gap-3 font-bold text-2xl sm:text-3xl tracking-tighter font"
      >
        <Image src="/logo.png" width={40} height={40} alt="logo" />
        Note <span className="text-[#684ADA]">Flow</span>
      </Link>

      <ul className="order-3 flex w-full items-center justify-center gap-5 sm:order-none sm:w-auto sm:gap-6">
        {menuList.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative pb-2 text-sm font-medium transition ${
                  isActive
                    ? "text-[#684ADA]"
                    : "text-slate-500 hover:text-[#684ADA]"
                }`}
              >
                {item.name}

                {isActive && (
                  <span className="absolute left-1/2 bottom-0 h-[3px] w-7 -translate-x-1/2 rounded-full bg-[#684ADA]" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href="/notes"
        className="bg-[#684ADA] text-white px-3 py-2 rounded-md text-sm sm:text-[15px] hover:scale-105 transition cursor-pointer"
      >
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;