import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getForecast } from "../assets/api";
import { RootState } from "../assets/interfaces";
import { getCities } from "../store/actions/actions";
import { Btn } from "./CityItem";

type IProps = {
  modalHandler: React.MouseEventHandler;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid black;
  background-color: white;
  width: 300px;
  height: 250px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const Button = styled.button`
  display: block;
  width: 176px;
  background: white;
  border-radius: 3px;
  border: 3px solid gray;
  color: gray;
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    color: white;
    background-color: gray;
    transition: all 0.2s;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  margin: 10px;
  border: 3px solid gray;
  border-radius: 10px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  padding: 0 10px;
`;

const Warning = styled.p`
  font-weight: bold;
  color: red;

    &.green {
      color: #00a500;
    }
  
`

export default function Modal(props: IProps): JSX.Element {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const cities = useSelector((state: RootState) => state.cities);
  const [wrongCityMarker, setWrongCityMarker] = useState(" ");

  function inputHandler(event: React.ChangeEvent): void {
    const target = event.target as HTMLFormElement;
    setInputValue(target.value);
  }

  async function addCityFormHandler(
    event: React.SyntheticEvent
  ): Promise<void> {
    event.preventDefault();
    const response = await getForecast(inputValue);
    if (response) {
      if (cities.find((el) => el.toLowerCase() === inputValue.toLowerCase())) {
        setWrongCityMarker("This city already exists");
      } else {
        dispatch(
          getCities(
            cities.concat(
              inputValue
                .split(" ")
                .map((el) =>
                  el
                    .split("")
                    .map((letter, index) =>
                      index === 0 ? letter.toUpperCase() : letter.toLowerCase()
                    )
                    .join("")
                )
                .join(" ")
            )
          )
        );
        setInputValue("");
        setWrongCityMarker("New city were added");
      }
    } else {
      setWrongCityMarker("Wrong city name");
    }
  }

  return (
    <Container>
      <Wrapper>
        <Warning className={wrongCityMarker==="New city were added" ? 'green' : 'red'}>{wrongCityMarker}</Warning>
        <Form onSubmit={addCityFormHandler}>
          <Input onChange={inputHandler} value={inputValue} type="text" />
          <Button type="submit">Add</Button>
        </Form>
        <Btn onClick={props.modalHandler}>Close</Btn>
      </Wrapper>
    </Container>
  );
}
