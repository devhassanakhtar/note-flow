"use client";

import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditNotePage = () => {
  const router = useRouter();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Study");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const selectedNote = savedNotes.find(
      (note) => String(note.id) === String(id)
    );

    if (selectedNote) {
      setTitle(selectedNote.title);
      setCategory(selectedNote.category);
      setDescription(selectedNote.description);
    }

    setLoading(false);
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = savedNotes.map((note) => {
      if (String(note.id) === String(id)) {
        return {
          ...note,
          title,
          category,
          description,
        };
      }

      return note;
    });

    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    router.push("/notes");
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-slate-500">Loading note...</p>
      </div>
    );
  }

  return (
    <main className="flex h-screen overflow-hidden px-10 custom-bg text-black">
      <div className="h-full w-[300px] shrink-0 py-10">
        <button
          onClick={() => router.back()}
          className="flex w-fit cursor-pointer items-center gap-3 rounded-md border border-gray-400 px-4 py-2 transition hover:scale-[1.02] hover:bg-white/20"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      <div className="h-full flex-1 py-10">
        <form onSubmit={handleUpdate}>
          <h1 className="text-4xl font-bold">Edit Note</h1>

          <p className="mt-3 text-sm text-slate-600">
            Update your note details.
          </p>

          <div className="mt-20 flex items-center gap-10">
            <div className="flex w-[50%] flex-col">
              <label
                htmlFor="title"
                className="text-lg font-semibold text-gray-700"
              >
                Title
              </label>

              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-md border border-gray-400 px-3 py-2 focus:outline-[#684ADA]"
                placeholder="Enter Note Title"
              />
            </div>

            <div className="flex w-[30%] flex-col">
              <label
                htmlFor="category"
                className="text-lg font-semibold text-gray-700"
              >
                Category
              </label>

              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-md border border-gray-400 px-3 py-2.5 focus:outline-[#684ADA]"
              >
                <option value="Study">Study</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Idea">Idea</option>
                <option value="Reminder">Reminder</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex w-[84%] flex-col">
            <label
              htmlFor="description"
              className="text-lg font-semibold text-gray-700"
            >
              Description
            </label>

            <textarea
              id="description"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="resize-none rounded-md border border-gray-400 px-3 py-2 focus:outline-[#684ADA]"
            ></textarea>
          </div>

          <div className="mt-8 flex w-[84%] items-center justify-end gap-5">
            <button
              type="button"
              onClick={() => router.back()}
              className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 transition hover:scale-[1.02]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="cursor-pointer rounded-lg border border-gray-300 bg-[#684ADA] px-4 py-2 text-white transition hover:scale-[1.02]"
            >
              Update Note
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditNotePage;