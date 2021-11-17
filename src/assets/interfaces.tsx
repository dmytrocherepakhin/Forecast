import { store } from "..";

export interface IForecast {
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  name: string;
  code: string | number;
}

export type RootState = ReturnType<typeof store.getState>;
