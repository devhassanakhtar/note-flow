import { Search } from "lucide-react";
import React from "react";

const categories = [
  {
    name: "Study",
    color: "bg-[#655EE6]",
  },
  {
    name: "Work",
    color: "bg-[#31A03E]",
  },
  {
    name: "Personal",
    color: "bg-[#F7B71F]",
  },
  {
    name: "Idea",
    color: "bg-[#EC56AC]",
  },
  {
    name: "Reminder",
    color: "bg-[#2FA8BC]",
  },
];

const Sidebar = ({
  notes = [],
  selectedCategory,
  setSelectedCategory,
  search,
  setSearch,
}) => {
  const getCategoryCount = (categoryName) => {
    return notes.filter((note) => note.category === categoryName).length;
  };

  return (
    <aside className="h-auto w-full shrink-0 overflow-hidden border-b border-gray-300 px-4 py-5 sm:px-6 md:h-full md:w-[270px] md:border-b-0 md:border-r md:px-8 md:py-7">
      <div className="relative flex items-center justify-between rounded-lg border border-gray-300 px-3 py-2">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[80%] text-black outline-none"
        />

        <label htmlFor="search">
          <Search
            className="absolute right-3 top-3 cursor-pointer text-gray-400"
            size={18}
          />
        </label>
      </div>

      <div className="mt-6 space-y-3 md:mt-8">
        <h2 className="mb-4 text-sm font-bold text-slate-800 font">
          Categories
        </h2>

        <div className="grid grid-cols-2 gap-3 md:block md:space-y-3">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-3 transition hover:bg-[#ECE3FF] sm:px-4 ${
              selectedCategory === "All" ? "bg-[#F3EDFF]" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#684ADA]" />
              <h2
                className={`text-sm ${
                  selectedCategory === "All"
                    ? "font-semibold text-[#684ADA]"
                    : ""
                }`}
              >
                All Notes
              </h2>
            </div>

            <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-500">
              {notes.length}
            </span>
          </button>

          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-3 transition hover:bg-[#ECE3FF] sm:px-4 ${
                selectedCategory === category.name ? "bg-[#F3EDFF]" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${category.color}`}
                />
                <h2
                  className={`text-sm ${
                    selectedCategory === category.name
                      ? "font-semibold text-[#684ADA]"
                      : ""
                  }`}
                >
                  {category.name}
                </h2>
              </div>

              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-500">
                {getCategoryCount(category.name)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;