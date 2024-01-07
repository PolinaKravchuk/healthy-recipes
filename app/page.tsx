import DinnerSection from "@/components/DinnerSection";
import BreakfastSection from "@/components/BreakfastSection";

export default async function Home() {
  return (
    <>
      <div className="gap-8 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <BreakfastSection />
        <DinnerSection />
      </div>
    </>
  );
}
