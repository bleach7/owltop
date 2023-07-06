"use client";

import { convertToTextQuery } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
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
    formState: { errors },
    resetField,
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(className)}
      {...props}
    >
      <fieldset>
        <legend className="sr-only">Форма поиска</legend>
        <Input
          {...register("searchQuery")}
          type="search"
          placeholder="Поиск..."
        />
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
