import axios, { AxiosPromise } from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";

export async function getForecast(
  cityName: string | undefined
): Promise<AxiosPromise | null> {
  let forecastData = null;
  try {
    type IParams = {
      q: string | undefined;
      appid: string | undefined;
    };

    const params: IParams = {
      q: cityName,
      appid: process.env.REACT_APP_API_KEY,
    };

    forecastData = await axios.get(url, { params });

    return forecastData;
  } catch (err) {
    throw new Error("Error  of forecast request");
  } finally {
    return forecastData;
  }
}
