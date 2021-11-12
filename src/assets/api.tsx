
import axios, { AxiosPromise } from "axios";
import { type } from "os";
import React from "react";
import { Params } from "react-router";
const apiKey='19f9b81137fbe431a9664914b6cbb73b';
const url='https://api.openweathermap.org/data/2.5/weather';

export async function getForecast(cityName:string):Promise<AxiosPromise>{

    type params={
        cityName: string,
        apiKey: string
    }

 const params:Params={
     cityName,
     apiKey
 }
 const forecastData = await axios.get(url, { params });
  try {
    return forecastData;
  } catch (err) {
    throw new Error('Error  of requestComics');
  }

    return forecastData
}

