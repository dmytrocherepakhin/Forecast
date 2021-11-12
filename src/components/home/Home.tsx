import React, { useEffect, useState } from "react";
import {getForecast} from '../../assets/api';
import CityItem, { Button, CityItemContainer } from "../cityItem/CityItem";
import styled from "styled-components";

const Container=styled.div`
color: gray;
text-align:center;
`
const Wrapper=styled.div`
display: flex;
flex-wrap: wrap;
`
const Title=styled.h1`
text-transform: uppercase;
`

function Home(): JSX.Element{
    const [cities, setSities]=useState<string[]>(['Kharkiv', 'Kyiv', 'London', 'New-York', 'Tokio'])
   console.log(getForecast('London'))
       
    
    useEffect(() => {
        async function fetchData() {
            console.log(await getForecast('London'));
        }
      });

    return ( 
        <Container>
             <Title>Forecast</Title>
             <Wrapper>
                 {cities.map((el, index)=>(<CityItem key={index} city={el}/>))}
            <CityItemContainer>
                <Button>Add new city</Button>
            </CityItemContainer>
             </Wrapper>
             
        </Container>
        )
    }

export default Home