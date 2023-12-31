import { updateQuery } from "@/app/store/features/query/querySlice";
import { RootState } from "@/app/store/store";
import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const SearchManufacturer = ({
  //manufacturers,
  setManufacturers,
}: SearchManufacturerProps) => {
  const dispatch = useDispatch();

  const handleQueryChange = (e: any) => {
    dispatch(updateQuery(e.target.value));
  };

  const query: string = useSelector((state: RootState) => state.query.query);

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className={`absolute top-[14px]`}>
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car-logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturers: string) => manufacturers}
            onChange={handleQueryChange}
          />
          <Transition
            leave="Transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => query}
          >
            <Combobox.Options>
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? `bg-primary-blue` : `text-gray-900`
                    }`
                  }
                  value={item}
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
