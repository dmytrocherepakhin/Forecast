import CityItem, { Btn, CityItemContainer } from "./CityItem";
import styled from "styled-components";
import { RootState } from "../assets/interfaces";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";

const Container = styled.div`
  color: gray;
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Title = styled.h1`
  text-transform: uppercase;
`;

function Home(): JSX.Element {
  const [openModal, setOpenModal] = useState(false);
  const cities = useSelector((state: RootState) => state.cities);

  function modalHandler(): void {
    openModal ? setOpenModal(false) : setOpenModal(true);
  }

  return (
    <Container>
      <Title>Forecast</Title>
      <Wrapper>
        {cities.map((el, index) => (
          <CityItem key={index} city={el} />
        ))}
        <CityItemContainer>
          <Btn onClick={modalHandler}>Add new city</Btn>
        </CityItemContainer>
      </Wrapper>
      {openModal ? <Modal modalHandler={modalHandler} /> : null}
    </Container>
  );
}

export default Home;
