import { fetchData } from "@/utils/fetchData";
import MealPage from "@/components/MealPage";

export default async function BreakfastPage({
  params,
}: {
  params: { slug: string };
}) {
  const recipe = await fetchData(params.slug, "meal3");

  if (!recipe) {
    return;
  }

  return <MealPage recipe={recipe} />;
}
