
import axios, { AxiosPromise } from "axios";
import { type } from "os";
import React from "react";
import { Params } from "react-router";

const url='https://api.openweathermap.org/data/2.5/weather';

export async function getForecast(cityName:string):Promise<AxiosPromise>{

    type IParams={
        q: string,
        appid: string | undefined
    }

 const params:IParams={
     q:cityName,
     appid: process.env.REACT_APP_API_KEY
 }
 const forecastData = await axios.get(url, { params });
  try {
      console.log(forecastData)
    return forecastData;
  } catch (err) {
    throw new Error('Error  of requestComics');
  }

    return forecastData
}

