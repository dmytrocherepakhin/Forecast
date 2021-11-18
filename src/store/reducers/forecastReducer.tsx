import { IForecast } from "../../assets/interfaces";
import {
  IForecastSaga,
  IGetCities,
  IGetForecastError,
  IGetForecastSuccess,
} from "../actions/actions";
import {
  FORECAST_SAGA,
  GET_CITIES,
  GET_FORECAST_ERROR,
  GET_FORECAST_SUCCESS,
} from "../actionTypes/types";

interface IState {
  cities: string[];
  forecast: IForecast | null;
  cityName: string | undefined;
  error: string;
}

const cities=localStorage.getItem('forecastCities') 
  ? JSON.parse(localStorage.getItem('forecastCities')||'{}') 
  : ["Kharkiv", "Kyiv", "London", "New York", "Tokio"]

const initialState = {
  cities: cities,
  forecast: null,
  cityName: "",
  error: "",
};

export default function forecastReducer(
  state: IState | undefined,
  action: IGetForecastSuccess | IGetCities | IForecastSaga | IGetForecastError
): IState {
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case GET_FORECAST_SUCCESS:
      return {
        ...state,
        forecast: action.payload.forecast,
      };
    case GET_FORECAST_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case FORECAST_SAGA:
      return {
        ...state,
        cityName: action.payload.cityName,
      };
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload.cities,
      };
    default:
      return state;
  }
}
