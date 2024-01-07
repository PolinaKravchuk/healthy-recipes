"use client";
import { fetchFileNames } from "@/utils/fetchFileNames";
import RecipeCard from "./RecipeCard";
import { useState } from "react";
import debounce from "@/utils/debounce";

interface IMealSectionProps {
  title: string;
  folder: string;
  names: string[];
}

const MealSection = ({ title, folder, names }: IMealSectionProps) => {
  const [recipyTitles, setRecipyTitles] = useState(names);

  const filterItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRecipyTitles(
      names.filter((name) => name.toLowerCase().includes(value.toLowerCase()))
    );
  };
  const debouncedFilter = debounce(filterItems, 300); // Adjust the debounce delay as needed

  return (
    <section>
      <h2 className="font-bold text-lg">{title}</h2>
      <span>Find recipes here</span>

      <div className="my-2">
        <input
          type="text"
          id="searchInput"
          placeholder="Search"
          onChange={debouncedFilter}
          className="text-black px-2 py-1 border rounded-md w-64 focus:outline-none focus:border-blue-500"
        />
      </div>

      <ul className="h-screen overflow-y-scroll">
        {recipyTitles &&
          recipyTitles.map((fileName: string, index: number) => (
            <RecipeCard key={index} name={fileName} folder={folder} />
          ))}
      </ul>
    </section>
  );
};
export default MealSection;
