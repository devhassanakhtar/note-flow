"use client";

import {
  ArrowLeft,
  Bell,
  BookOpen,
  Briefcase,
  FileText,
  Lightbulb,
  Pencil,
  Trash,
  Trash2,
  User,
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const categoryIcons = {
  Study: BookOpen,
  Work: Briefcase,
  Personal: User,
  Reminder: Bell,
  Idea: Lightbulb,
};

const Page = () => {
  const router = useRouter();
  const { id } = useParams();

  const [note, setNote] = useState(null);

  const handleDelete = (selectedNote) => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = savedNotes.filter(
      (item) => String(item.id) !== String(selectedNote.id),
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    router.push("/notes");
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const selectedNote = savedNotes.find(
      (item) => String(item.id) === String(id),
    );

    setNote(selectedNote || null);
  }, [id]);

  if (!note) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-slate-500">Note not found</p>
      </div>
    );
  }

  const Icon = categoryIcons[note.category] || FileText;

  return (
    <div className="flex px-10 justify-between">
      <div className="w-[200px] py-10">
        <button
          onClick={() => router.back()}
          className="flex w-fit cursor-pointer items-center justify-between gap-3 rounded-md border border-gray-300 px-4 py-2 transition hover:scale-[1.02] hover:bg-white/20"
        >
          <ArrowLeft size={16} />
          Back to Notes
        </button>
      </div>
      <div>
        <div className="mt-8 rounded-lg border border-gray-300 p-6 py-10 shadow-lg w-[50vw]">
          <div className="flex items-start gap-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3EDFF]">
              <Icon className="text-[#684ADA]" size={28} />
            </span>

            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                {note.title}
              </h1>

              <div className="mt-3 flex items-center gap-3">
                <span className="rounded-full bg-[#F3EDFF] px-3 py-1 text-xs font-bold text-[#684ADA]">
                  {note.category}
                </span>
                <div className="h-5 w-0.5 bg-black/10"></div>
                <span className="text-sm text-slate-500">{note.createdAt}</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="whitespace-pre-wrap leading-7 text-slate-800">
              {note.description}
            </p>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <Link
              href={`/notes/edit/${note.id}`}
              className="flex items-center justify-between gap-3 bg-[#6A46E0] text-white p-3 text-sm rounded-lg cursor-pointer hover:scale-[1.02] transition"
            >
              <Pencil size={16} /> Edit Note
            </Link>
            <button
              onClick={() => {
                handleDelete(note);
              }}
              className="flex items-center justify-between gap-3 bg-red-500 text-white p-3 text-sm rounded-lg cursor-pointer hover:scale-[1.02] transition"
            >
              <Trash2 size={16} /> Delete Note
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 w-[20%] bg-[#F2F5FB] text-black p-6 rounded-lg shadow-lg border border-gray-300">
        <h1 className="text-2xl font-bold font">Note Details</h1>
        <div className="mt-8">
          <h1 className="text-lg font-bold font">Category</h1>
          <span className="text-sm">{note.category}</span>
        </div>
        <div className="mt-4">
          <h1 className="text-lg font-bold font">Created At</h1>
          <span className="text-sm">{note.createdAt}</span>
        </div>
        <div className="mt-4">
          <h1 className="text-lg font-bold font">Note ID</h1>
          <span className="text-sm">{note.id}</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
