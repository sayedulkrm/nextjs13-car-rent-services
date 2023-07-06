"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit }: IShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        // Calculate the new limit based on the page number and navigation type
        const newLimit = (pageNumber + 1) * 10;

        // Update the "limit" search parameter in the URL with the new value

        // const newPathName = updateSearchParams("limit", `${newLimit}`);

        // router.push(newPathName);

        setLimit(newLimit);
    };

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    btnType="button"
                    title="Show More"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    );
};

export default ShowMore;
