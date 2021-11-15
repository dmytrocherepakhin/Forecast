import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../assets/interfaces";
import { forecastSaga } from "../../store/actions/actions";

const Wrapper = styled.div`
  margin: 20px auto;
  width: 300px;
  text-align: center;
  border: 3px solid black;
  border-radius: 15px;

  & h1,
  & h2 {
    text-transform: uppercase;
  }

  & h1 {
    font-weight: normal;
    color: gray;
  }
`;
const SLink = styled(Link)`
  display: block;
  background: white;
  border-radius: 3px;
  border: 3px solid gray;
  color: gray;
  margin: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  font-weight: bold;

  :hover {
    color: white;
    background-color: gray;
    transition: all 0.2s;
  }
`;

function City(): JSX.Element {
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const forecast = useSelector((state: RootState) => state.forecast);

  const makeRequest = async (): Promise<void> => {
    const city = params.id;
    dispatch(forecastSaga(city));
  };

  useEffect(() => {
    makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Wrapper>
      <h1>Forecast</h1>
      <h2>{forecast?.name}</h2>
      <p>{forecast?.weather[0].description}</p>
      <p>
        <img
          src={
            "http://openweathermap.org/img/wn/" +
            forecast?.weather[0].icon +
            "@4x.png"
          }
          alt="weather"
        />
      </p>
      <p>
        Temperature:{" "}
        {forecast?.main.temp
          ? (forecast?.main.temp - 273.15).toFixed(1)
          : "---"}{" "}
        {"\u2103"}
      </p>
      <p>
        Feels_likefeels_like:{" "}
        {forecast?.main.feels_like
          ? (forecast?.main.feels_like - 273.15).toFixed(1)
          : "---"}{" "}
        {"\u2103"}
      </p>
      <p>Pressure: {forecast?.main.pressure} Pa</p>
      <p>Humidity: {forecast?.main.humidity} %</p>
      <p>Wind: {forecast?.wind.speed} m/c</p>
      <SLink to={"/"}>Home</SLink>
    </Wrapper>
  );
}

export default City;
