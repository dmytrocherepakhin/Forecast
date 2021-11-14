import { IForecast } from "../../assets/interfaces";
import { GET_CITIES, FORECAST_SAGA, GET_FORECAST_SUCCESS, GET_FORECAST_ERROR } from "../actionTypes/types";


export interface IGetForecastSuccess {
  type: typeof GET_FORECAST_SUCCESS;
  payload: {
    forecast: IForecast
  }
}

export interface IGetForecastError {
  type: typeof GET_FORECAST_ERROR;
  payload: {
    error: string
  }
}

export interface IForecastSaga {
  type: typeof FORECAST_SAGA;
  payload: {
    cityName: string
  }
}

export interface IGetCities {
  type: typeof GET_CITIES;
  payload: {
    cities: string[]
  }
}

export function getForecastSuccess(
  forecast: IForecast
): IGetForecastSuccess {
  return {
    type: GET_FORECAST_SUCCESS,
    payload: {
      forecast
    }
  }
}

export function getForecastError(
  error: string
): IGetForecastError {
  return {
    type: GET_FORECAST_ERROR,
    payload: {
      error
    }
  }
}

export function forecastSaga(
  cityName: string
): IForecastSaga {
  return {
    type: FORECAST_SAGA,
    payload: {
      cityName
    }
  }
}

export function getCities(
  cities: string[]
): IGetCities {
  return {
    type: GET_CITIES,
    payload: {
      cities
    }
  }

}
