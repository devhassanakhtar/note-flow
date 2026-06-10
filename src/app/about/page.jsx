import { BookOpen, Layers, Search, ShieldCheck } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="flex-1 bg-[#F8F3FE] px-4 py-10 sm:px-8 lg:px-20 lg:py-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#684ADA] shadow-sm">
            About NoteFlow
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Your personal space to organize{" "}
            <span className="text-[#684ADA]">ideas and notes</span>
          </h1>

          <p className="mt-6 max-w-xl text-slate-500 leading-7">
            NoteFlow is a simple and clean notes app where you can write,
            organize, edit and manage your daily thoughts, study notes,
            reminders and ideas in one place.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <Image
            src="/note2.png"
            width={500}
            height={500}
            alt="About NoteFlow"
            className="h-auto w-full max-w-[420px] lg:max-w-[500px]"
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="mt-14 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-purple-100 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 font sm:text-3xl">
            What is NoteFlow?
          </h2>

          <p className="mt-4 text-slate-500 leading-7">
            NoteFlow is designed for users who want a simple way to save their
            notes without any complex dashboard. You can create notes, view
            details, edit them later and delete old notes easily.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border border-purple-100 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 font sm:text-3xl">
            Why this project?
          </h2>

          <p className="mt-4 text-slate-500 leading-7">
            This project is perfect for practicing Next.js basics like routing,
            components, forms, localStorage, dynamic pages and CRUD operations.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mt-14 lg:mt-20">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Main Features
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-center text-slate-500">
          Everything you need to manage your notes in a simple and organized
          way.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-purple-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3EDFF] text-[#684ADA]">
              <BookOpen size={22} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Create Notes
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Quickly add new notes with title, category and description.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-purple-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3EDFF] text-[#684ADA]">
              <Layers size={22} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Categories
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Organize notes into Study, Work, Personal, Ideas and Reminder.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-purple-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3EDFF] text-[#684ADA]">
              <Search size={22} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Search Notes
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Find your notes easily by searching title or description.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-purple-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3EDFF] text-[#684ADA]">
              <ShieldCheck size={22} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Local Storage
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Your notes are saved in browser localStorage for simple practice.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;