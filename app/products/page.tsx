"use client";
import React from "react";
import { useGetCarsQuery } from "../store/features/apiFetch/apiFetch";
import { CarCard } from "@/components";

const Products = () => {
  const {
    data: cars,
    error,
    isLoading,
  } = useGetCarsQuery({ model: "corolla", limit: "5" });
  return (
    <section className="max-w-[1440px] mx-auto px-5">
      <div className="my-10">
        <h1 className="hero__title-more">
          {" "}
          Find, Book, or rent a car -- quickly and easily!!
        </h1>
        <p className="hero__subtitle-more">
          We offer the best selection of cars in the market. Whether you are
          planning a road trip with friends or need a reliable ride for work,
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {cars?.map((car: any) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default Products;
