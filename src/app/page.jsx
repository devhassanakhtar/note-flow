import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="flex-1 overflow-hidden bg-[#F8F3FE] px-20 flex items-center justify-between">
      <div className="w-1/2 flex flex-col gap-10">
        <h1 className="text-7xl font-bold leading-tight">
          Organize your <br /> thoughts and ideas <br /> in
          <span className="text-[#684ADA]"> one place</span>
        </h1>

        <p className="text-slate-500 max-w-lg">
          NoteFlow helps you capture, organize, and manage your note easily and
          efficiently.
        </p>

        <Link
          href="/notes"
          className="bg-[#684ADA] text-white px-5 py-3 rounded-md text-[15px] w-fit hover:scale-105 transition cursor-pointer flex gap-2 items-center group"
        >
          Get Started
          <ArrowRight
            size={15}
            className="group-hover:translate-x-1 transition"
          />
        </Link>
      </div>

      <div className="w-1/2 flex justify-end">
        <Image
          src="/note2.png"
          width={600}
          height={600}
          alt="notebook"
          className="max-h-[calc(100vh-120px)] w-auto object-contain"
        />
      </div>
    </main>
  );
};

export default Page;