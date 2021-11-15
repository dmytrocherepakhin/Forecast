import CityItem, { Button, CityItemContainer } from "../cityItem/CityItem";
import styled from "styled-components";
import { RootState } from "../../assets/interfaces";
import { useSelector } from "react-redux";

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
    const cities = useSelector(
        (state: RootState) => state.cities
      );

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
