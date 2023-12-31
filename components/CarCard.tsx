import { CarsProps } from "../types/index";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import CustomButton from "@/shared/CustomButton";
import CarDetailsModal from "./CarDetailsModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import {
  openModal,
  closeModal,
  selectIsModalOpen,
} from "@/app/store/features/modalSlice.ts/modalSlice";

interface CarCardProps {
  car: CarsProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  //Calculate for carRent
  const carRent = calculateCarRent(city_mpg, year);

  //Modal
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => selectIsModalOpen(state));

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <section className="car-card group mb-5">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start font-semibold text-[14px]">$</span>
        {carRent}
        <span className="self-end font-medium text-[14px]">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car-model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          {/* //Item -1 */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering-wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          {/* //Item -2 */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="Tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          {/* //Item -3 */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="Gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        {/* /Onclick Modal/ */}
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={handleOpenModal}
          />
        </div>
      </div>
      <CarDetailsModal
        car={car}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      />
    </section>
  );
};

export default CarCard;
