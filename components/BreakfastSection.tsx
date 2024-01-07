import { fetchFileNames } from "@/utils/fetchFileNames";
import MealSection from "./MealSection";

export interface IBreakfastRecipy {
  id: string;
  title: string;
}
export default async function BreakfastSection() {
  const fileNames: string[] = await fetchFileNames("meal1");

  return <MealSection title="Breakfast" folder="meal1" names={fileNames} />;
}
