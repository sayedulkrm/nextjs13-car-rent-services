// const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
// const options = {
//     method: "GET",
//     headers: {
//         "X-RapidAPI-Key": "e48125e49amsh89519ff73b7f7b5p1a8443jsn41283912fa56",
//         "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//     },
// };

import { ICarProps, IFilterProps } from "@/types";

// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }

export async function fetchCars(filters: IFilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;

    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "e48125e49amsh89519ff73b7f7b5p1a8443jsn41283912fa56",
            "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

// const url = new URL("https://cdn.imagin.studio/getimage");
// const { make, model, year } = car;

// url.searchParams.append("customer", " ");

// url.searchParams.append("make", make);
// url.searchParams.append("modelFamily", model.split(" ")[0]);
// url.searchParams.append("zoomType", "fullscreen");
// url.searchParams.append("modelYear", `${year}`);
// // url.searchParams.append('zoomLevel', zoomLevel);
// url.searchParams.append("angle", `${angle}`);

// return `${url}`;

export const generateCarImages = async (car: ICarProps, angle?: string) => {
    try {
        const response = await fetch(
            "https://api.unsplash.com/photos/random?query=car",
            {
                headers: {
                    Authorization:
                        " Client-ID rX0d7blIw1oJurfaxG74ijwnHDCGzmnxmu5OaASs53o",
                },
            }
        );

        const data = await response.json();
        console.log(data);
        return data.urls.regular;
    } catch (error) {
        console.error("Error fetching car image:", error);
    }
};

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathName = `${
        window.location.pathname
    }?${searchParams.toString()}`;

    return newPathName;
};
