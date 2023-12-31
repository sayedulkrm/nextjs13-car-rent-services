"use client";
import React, { useState } from "react";
import SearchMenufacturer from "./SearchMenufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src={"/magnifying-glass.svg"}
            alt={"magnifying glass"}
            width={40}
            height={40}
            className="object-contain"
        />
    </button>
);

const SearchBar = () => {
    const [menuFacturer, setMenuFacturer] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (menuFacturer === "" && model === "") {
            return alert("Please enter a search term");
        }

        updateSearchParams(model.toLowerCase(), menuFacturer.toLowerCase());
    };

    const updateSearchParams = (model: string, menuFacturer: string) => {
        const searchParams = new URLSearchParams();

        if (model !== "") {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");
        }

        if (menuFacturer !== "") {
            searchParams.set("menufacturer", menuFacturer);
        } else {
            searchParams.delete("menufacturer");
        }

        const newPathName = `${
            window.location.pathname
        }?${searchParams.toString()}`;

        router.push(newPathName);
    };

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <div className="searchbar__item">
                <SearchMenufacturer
                    menuFacturer={menuFacturer}
                    setMenuFacturer={setMenuFacturer}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                    alt="car model"
                />

                <input
                    type="text"
                    name="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Tiguan..."
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    );
};

export default SearchBar;
