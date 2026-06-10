import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-[#F8F3FE] px-4 py-10 sm:px-8 lg:flex lg:items-center lg:justify-between lg:overflow-hidden lg:px-20 lg:py-0">
      <div className="flex w-full flex-col gap-8 lg:w-1/2 lg:gap-10">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Organize your <br className="hidden sm:block" /> thoughts and ideas{" "}
          <br className="hidden sm:block" /> in
          <span className="text-[#684ADA]"> one place</span>
        </h1>

        <p className="max-w-lg text-slate-500">
          NoteFlow helps you capture, organize, and manage your note easily and
          efficiently.
        </p>

        <Link
          href="/notes"
          className="flex w-fit cursor-pointer items-center gap-2 rounded-md bg-[#684ADA] px-5 py-3 text-[15px] text-white transition hover:scale-105 group"
        >
          Get Started
          <ArrowRight
            size={15}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>

      <div className="mt-10 flex w-full justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
        <Image
          src="/note2.png"
          width={600}
          height={600}
          alt="notebook"
          className="h-auto w-full max-w-[420px] object-contain lg:max-h-[calc(100vh-120px)] lg:w-auto lg:max-w-none"
        />
      </div>
    </main>
  );
};

export default Page;