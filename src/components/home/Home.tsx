import React, { useEffect, useState } from "react";
import { getForecast } from '../../assets/api';
import CityItem, { Button, CityItemContainer } from "../cityItem/CityItem";
import styled from "styled-components";
import { IForecast } from "../../assets/interfaces";

const Container = styled.div`
color: gray;
text-align:center;
`
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Title = styled.h1`
text-transform: uppercase;
`

function Home(): JSX.Element {
    const [cities, setSities] = useState<string[]>(['Kharkiv', 'Kyiv', 'London', 'New-York', 'Tokio'])
    const [forecast, setForecast] = useState<IForecast | null>(null)

    useEffect(() => {
        async function fetchData() {
            const forecastData = (await getForecast('London'));
            setForecast({
                weatherDescription: forecastData.data.weather[0].description,
                weatherIcon: forecastData.data.weather[0].icon,
                mainTemp: (forecastData.data.main.temp - 273.15).toFixed(1),
                mainFeels_like: (forecastData.data.main.feels_like - 273.15).toFixed(1),
                mainPressure: forecastData.data.main.pressure,
                mainHumidity: forecastData.data.main.humidity,
                windSpeed: forecastData.data.wind.speed.toFixed(1)
            })
        }
        if (!forecast) fetchData()
        console.log(forecast)
    });

    return (
        <Container>
            <Title>Forecast</Title>
            <Wrapper>
                {cities.map((el, index) => (<CityItem key={index} city={el} />))}
                <CityItemContainer>
                    <Button>Add new city</Button>
                </CityItemContainer>
            </Wrapper>
        </Container>
    )
}

export default Home
