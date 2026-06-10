"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Study");
  const [description, setDescription] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      title,
      category,
      description,
      createdAt: new Date().toLocaleDateString(),
    };

    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = [...savedNotes, newNote];

    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setTitle("");
    setCategory("Study");
    setDescription("");

    router.push("/notes");
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col overflow-y-auto px-4 custom-bg text-black sm:px-6 lg:flex-row lg:overflow-hidden lg:px-10">
      <div className="w-full shrink-0 py-6 lg:h-full lg:w-[300px] lg:py-10">
        <button
          onClick={() => router.back()}
          className="flex w-fit cursor-pointer items-center justify-between gap-3 rounded-md border border-gray-400 px-4 py-2 transition hover:scale-[1.02] hover:bg-white/20"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      <div className="h-full flex-1 py-2 pb-10 lg:py-10">
        <form action="">
          <h1 className="text-3xl font-bold sm:text-4xl">Add New Note</h1>
          <p className="mt-3 text-sm text-slate-600">
            Fill in the details to create a new note.
          </p>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center lg:mt-20 lg:gap-10">
            <div className="flex w-full flex-col md:w-[50%]">
              <label
                htmlFor="text"
                className="font-semibold text-gray-700 text-lg"
              >
                Title
              </label>
              <input
                type="text"
                name="text"
                id="text"
                onChange={handleTitle}
                value={title}
                className="border border-gray-400 px-3 py-2 rounded-md focus:outline-[#684ADA]"
                placeholder="Enter Note Title"
              />
            </div>

            <div className="flex w-full flex-col md:w-[30%]">
              <label
                htmlFor="select"
                className="font-semibold text-gray-700 text-lg"
              >
                Category
              </label>
              <select
                name="select"
                id="select"
                value={category}
                onChange={handleCategory}
                className="border border-gray-400 px-3 py-2.5 rounded-md focus:outline-[#684ADA]"
              >
                <option value="Study" className="bg-[#F7F3FE]">
                  Study
                </option>
                <option value="Work" className="bg-[#F7F3FE]">
                  Work
                </option>
                <option value="Personal" className="bg-[#F7F3FE]">
                  Personal
                </option>
                <option value="Idea" className="bg-[#F7F3FE]">
                  Idea
                </option>
                <option value="Reminder" className="bg-[#F7F3FE]">
                  Reminder
                </option>
              </select>
            </div>
          </div>

          <div className="flex w-full flex-col mt-8 lg:w-[84%]">
            <label
              htmlFor="desc"
              className="font-semibold text-gray-700 text-lg"
            >
              Description
            </label>
            <textarea
              name="desc"
              id="desc"
              rows={5}
              value={description}
              onChange={handleDescription}
              className="border border-gray-400 px-3 py-2 rounded-md focus:outline-[#684ADA] resize-none"
            ></textarea>
          </div>

          <div className="mt-8 flex w-full flex-col-reverse items-stretch justify-end gap-3 sm:flex-row sm:items-center lg:w-[84%] lg:gap-5">
            <button className="border px-4 py-2 rounded-lg border-gray-300 hover:scale-[1.02] cursor-pointer transition">
              Cancel
            </button>
            <button
              className="border px-4 py-2 rounded-lg border-gray-300 hover:scale-[1.02] cursor-pointer transition bg-[#684ADA] text-white"
              onClick={handleSubmit}
              type="submit"
            >
              Save Note
            </button>
          </div>
        </form>
      </div>

      <div className="hidden h-full w-[350px] items-center justify-center xl:flex 2xl:w-[700px]">
        <Image src="/note2.png" width={300} height={300} alt="Note image" />
      </div>
    </main>
  );
};

export default Page;