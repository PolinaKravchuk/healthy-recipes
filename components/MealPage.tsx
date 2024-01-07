import fetchImageByTitle from "@/utils/fetchImageByTitle";
import Image from "next/image";

type foodType = {
  title: string;
  RecipeComponent: {
    weight: number;
  };
};
interface IMealPageProps {
  recipe: {
    title: string;
    calories: string;
    proteins: string;
    fats: string;
    carbohydrates: string;
    foods: foodType[];
    steps: string[];
  };
}
const MealPage = async ({ recipe }: IMealPageProps) => {
  const { title, calories, proteins, fats, carbohydrates, foods, steps } =
    recipe;
  const image = await fetchImageByTitle(title);

  return (
    <div className="max-w-full mx-8 mt-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      {image && (
        <Image width="300" height="100" src={image} alt={title}></Image>
      )}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Nutrition Information:</h2>
        <p>Calories: {calories}</p>
        <p>Proteins: {proteins}</p>
        <p>Fats: {fats}</p>
        <p>Carbohydrates: {carbohydrates}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {foods.map((food: foodType, index: number) => (
            <div
              key={index}
              className="bg-white text-black p-4 rounded shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">{food.title}</h3>
              <p>Weight: {food.RecipeComponent.weight}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Steps:</h2>
        <ol className="list-decimal gap-6">
          {steps.map((step: string, index: number) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MealPage;
