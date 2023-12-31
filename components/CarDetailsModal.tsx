import { CarsProps } from "@/types";
import React from "react";

interface CarDetailsProps {
  car: CarsProps;
}
const CarDetailsModal = (car: CarDetailsProps) => {
  // console.log(car);
  console.log(process.env.NODE_ENV, "kddf");
  return <div>Car Details</div>;
};

export default CarDetailsModal;
