"use client";

import { SearchIcon, SearchResetIcon } from "@/imgs/icons";
import { convertToTextQuery } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Text } from "../Text";
import { ISearch, ISearchSubmitData } from "./Search.interface";
import { searchSchema } from "./Search.schema";

export const Search = ({ className, ...props }: ISearch) => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
    resetField,
    setFocus,
  } = useForm<ISearchSubmitData>({
    resolver: yupResolver(searchSchema),
    defaultValues: {
      searchQuery: "",
    },
  });

  const onSubmit = ({ searchQuery }: ISearchSubmitData) => {
    const value = convertToTextQuery(searchQuery);

    router.push(`search?keyword=${value}`);

    resetField("searchQuery");
  };

  const handleResetForm = () => {
    resetField("searchQuery");

    setFocus("searchQuery");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(className)}
      {...props}
    >
      <fieldset className="grid grid-cols-[1fr_40px] gap-x-[5px]">
        <legend className="sr-only">Форма поиска</legend>
        <div className="relative w-full">
          <Input
            {...register("searchQuery")}
            type="text"
            placeholder="Поиск..."
            className="pr-[30px]"
          />
          <button
            onClick={handleResetForm}
            type="button"
            aria-label="Очистить форму поиска"
            className={classNames(
              "absolute right-0 top-2/4 flex h-[30px] w-[30px] -translate-y-2/4 items-center justify-center text-[#1CC37E] transition-opacity duration-300 ease-in-out focus:outline-none focus-visible:outline-[#7653FC]",
              {
                ["pointer-events-none invisible opacity-0"]: !isDirty,
              }
            )}
          >
            <SearchResetIcon className="h-auto w-[18px]" />
          </button>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          aria-label="Найти"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-[5px] bg-[#7653FC] text-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] focus:outline-none focus-visible:outline-[#7653FC]"
        >
          <SearchIcon className="h-auto w-[18px]" />
        </motion.button>
      </fieldset>
      <div className="mt-[7px] flex flex-col gap-y-[5px] text-[#DE0000]">
        {errors.searchQuery?.message && (
          <Text as="span" size="sm">
            {errors.searchQuery.message}
          </Text>
        )}
      </div>
    </form>
  );
};
