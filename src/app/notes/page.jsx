"use client";

import Sidebar from "@/components/Sidebar";
import {
  BookOpen,
  Briefcase,
  Lightbulb,
  FileText,
  Eye,
  Pencil,
  Plus,
  Trash2,
  Bell,
  User,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const categoryIcons = {
  Study: BookOpen,
  Work: Briefcase,
  Personal: User,
  Reminder: Bell,
  Idea: Lightbulb,
};

const categoryColors = {
  Study: {
    text: "text-[#684ADA]",
    iconBg: "bg-[#F3EDFF]",
  },
  Work: {
    text: "text-[#31A03E]",
    iconBg: "bg-[#EAF7EC]",
  },
  Personal: {
    text: "text-[#F7B71F]",
    iconBg: "bg-[#FFF6DD]",
  },
  Idea: {
    text: "text-[#EC56AC]",
    iconBg: "bg-[#FDEAF5]",
  },
  Reminder: {
    text: "text-[#2FA8BC]",
    iconBg: "bg-[#EAF7FA]",
  },
};

const Page = () => {
  const [notes, setNotes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter((note) => {
    const matchCategory =
      selectedCategory === "All" || note.category === selectedCategory;

    const searchValue = search.toLowerCase();

    const matchSearch =
      note.title.toLowerCase().includes(searchValue) ||
      note.category.toLowerCase().includes(searchValue) ||
      note.description.toLowerCase().includes(searchValue);

    return matchCategory && matchSearch;
  });

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const handleDelete = (selectedNote) => {
    const updateNotes = notes.filter((note) => note.id !== selectedNote.id);

    setNotes(updateNotes);
    localStorage.setItem("notes", JSON.stringify(updateNotes));
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-1 flex-col overflow-hidden md:flex-row">
      <Sidebar
        notes={notes}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        search={search}
        setSearch={setSearch}
      />

      <section className="flex min-h-0 flex-1 flex-col overflow-hidden bg-[#F8F3FE] p-3 sm:p-6">
        <div className="flex shrink-0 flex-col gap-4 rounded-2xl bg-white px-4 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 font">
              All Notes
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {filteredNotes.length} notes
            </p>
          </div>

          <Link
            href="/addnotes"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#684ADA] px-4 py-2.5 text-sm font-medium text-white transition hover:scale-105 sm:w-fit"
          >
            <Plus size={18} />
            {selectedCategory === "All" ? "All Notes" : selectedCategory}
          </Link>
        </div>

        <div className="mt-4 flex-1 overflow-y-auto rounded-2xl bg-white p-4 shadow-sm sm:mt-6 sm:p-6">
          {filteredNotes.length === 0 ? (
            <div className="flex h-full min-h-[250px] items-center justify-center">
              <p className="text-center text-slate-500">
                No notes found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredNotes.map((note, index) => {
                const Icon = categoryIcons[note.category] || FileText;
                const colors =
                  categoryColors[note.category] || categoryColors.Study;

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-300 p-5 shadow-lg transition hover:shadow-xl"
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${colors.iconBg}`}
                    >
                      <Icon className={`${colors.text}`} size={24} />
                    </span>

                    <h2 className="mt-3 text-xl font-bold">{note.title}</h2>

                    <span
                      className={`mt-3 flex w-fit items-center justify-center rounded-full ${colors.iconBg} px-3 py-1 text-xs font-bold ${colors.text}`}
                    >
                      {note.category}
                    </span>

                    <p className="mt-3 line-clamp-2 text-sm text-slate-500">
                      {note.description}
                    </p>

                    <p className="mt-5 text-sm text-slate-800">
                      {note.createdAt}
                    </p>

                    <div className="mt-5 flex justify-end gap-3 border-t border-gray-300 pt-5">
                      <Link
                        href={`/notes/${note.id}`}
                        className="group flex w-fit items-center justify-center rounded-lg border border-gray-300 p-2 transition hover:scale-102 hover:shadow-lg"
                      >
                        <Eye
                          size={16}
                          className="group-hover:text-[#2FA8BC] transition"
                        />
                      </Link>

                      <Link
                        href={`/notes/edit/${note.id}`}
                        className="group flex w-fit items-center justify-center rounded-lg border border-gray-300 p-2 transition hover:scale-102 hover:shadow-lg"
                      >
                        <Pencil
                          size={16}
                          className="group-hover:text-[#684ADA] transition"
                        />
                      </Link>

                      <button
                        onClick={() => handleDelete(note)}
                        className="group flex w-fit items-center justify-center rounded-lg border border-gray-300 p-2 transition hover:scale-102 hover:shadow-lg cursor-pointer"
                      >
                        <Trash2
                          size={16}
                          className="group-hover:text-red-500 transition"
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;