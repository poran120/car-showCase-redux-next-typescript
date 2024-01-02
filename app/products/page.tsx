"use client";
import React, { useState } from "react";
import { useGetCarsQuery } from "../store/features/apiFetch/apiFetch";
import { CarCard, CustomButton } from "@/components";
import { CarsProps } from "@/types";
import Loading from "@/shared/Loading";

const Products = () => {
  const {
    data: cars,
    error,
    isLoading,
  } = useGetCarsQuery({ model: "corolla", limit: "30" });

  const [displayedCars, setDisplayedCars] = useState(5);

  //
  const handleLoadMore = () => {
    setDisplayedCars((prevDisplayedCars) => prevDisplayedCars + 5);
  };

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
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {cars?.slice(0, displayedCars).map((car: CarsProps) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      )}
      {cars && displayedCars < cars.length && (
        <div className="flex justify-center items-center">
          {isLoading ? (
            <p>loading</p>
          ) : (
            <CustomButton
              title="Show More"
              handleClick={handleLoadMore}
              containerStyles="bg-primary-blue text-white rounded-full mt-10 custom-btn-effect"
            />
          )}
        </div>
      )}
    </section>
  );
};

export default Products;
