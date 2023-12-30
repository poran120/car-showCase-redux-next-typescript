"use client";
import Hero from "@/components/Hero";
import CustomFilter from "@/shared/CustomFilter";
import SearchBar from "@/shared/SearchBar";
import { useGetCarsQuery } from "./store/features/apiFetch/apiFetch";

export default function Home() {
  const {
    data: cars,
    error,
    isLoading,
  } = useGetCarsQuery({ model: "corolla", limit: "30" });
  console.log(cars);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>
            Read more: https://nextjs.org/docs/messages/next-image-upgrade-to-13
          </p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
