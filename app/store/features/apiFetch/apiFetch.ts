import { GetCarsResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidAPI_KEY = "0bfc7d3c57mshb783830598ac7fep1f7ebfjsnb8afed32d414";
const rapidAPI_HOST = "cars-by-api-ninjas.p.rapidapi.com";

export const carsApi = createApi({
  reducerPath: "cars",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cars-by-api-ninjas.p.rapidapi.com/v1/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidAPI_KEY);
      headers.set("X-RapidAPI-Host", rapidAPI_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (params) => ({ url: "cars", params }),
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
