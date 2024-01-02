"use client";
import Hero from "@/components/Hero";
import SearchBar from "@/shared/SearchBar";
import { useGetCarsQuery } from "./store/features/apiFetch/apiFetch";
import { CarCard, CustomButton } from "@/components";
import Link from "next/link";

export default function Home() {
  const {
    data: cars,
    error,
    isLoading,
  } = useGetCarsQuery({ model: "corolla", limit: "4" });

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
        <div className="home__filters mb-4">
          <SearchBar />
          <div className="home__filter-container">
            {/* <CustomFilter title="fuel" />
            <CustomFilter title="year" /> */}
          </div>
        </div>
        <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {cars?.map((car: any) => (
            <CarCard key={car._id} car={car} />
          ))}
        </section>

        <div className="w-full justify-center flex items-center">
          <button className="flex items-center justify-center text-center bg-primary-blue text-white rounded-full px-5 py-3">
            <Link href="/products">Explore Cars</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
