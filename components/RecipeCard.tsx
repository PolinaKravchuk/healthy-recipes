// components/RecipeCard.js
import Link from "next/link";

const RecipeCard = ({ name, folder }: { name: string; folder: string }) => {
  return (
    <Link
      href={`${folder === "meal1" ? "breakfast" : "dinner"}/${name}`}
      className="m-2"
    >
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black cursor-pointer hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
        <div className="px-6 py-4">
          <div className="font-bold text-l mb-2">{name}</div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
