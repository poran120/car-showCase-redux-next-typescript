import { MouseEventHandler } from "react";
import { manufacturers } from "../constants/index";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturers: string;
  setManufacturers: (manufacturers: string) => void;
}
