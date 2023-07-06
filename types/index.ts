import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
    title: string;
    containerStyles: string;
    btnType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface ISearchMenuFacturerProps {
    menuFacturer: string;
    setMenuFacturer: (menuFacturer: string) => void;
}

export interface ICarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface IFilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

interface IOptionsProps {
    title: string;
    value: string;
}

export interface ICustomFilterProps {
    title: string;
    options: IOptionsProps[];
}

export interface IShowMoreProps {
    pageNumber: number;

    isNext: boolean;
}
