import MealSection from "./MealSection";
import { fetchFileNames } from "@/utils/fetchFileNames";

const DinnerSection = async () => {
  const fileNames: string[] = await fetchFileNames("meal3");

  return <MealSection title="Dinner" folder="meal3" names={fileNames} />;
};
export default DinnerSection;
