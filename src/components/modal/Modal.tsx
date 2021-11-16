import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../assets/interfaces";
import { getCities } from "../../store/actions/actions";
import { Btn } from "../cityItem/CityItem";

type IProps={
    modalHandler:React.MouseEventHandler
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
`
const Wrapper = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
    border: 3px solid black;
    background-color: white;
   width: 300px;
  height: 200px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;  
`

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
`
const Form = styled.form`
display: flex;
 flex-direction: column;
justify-content: space-between;
align-items: center;
`

const Input = styled.input`
width: 100%;
margin: 10px;
border: 3px solid gray;
 border-radius: 10px;
height: 40px;
 font-size: 16px;
 font-weight: bold;
padding: 0 10px;
`

export default function Modal(props:IProps):JSX.Element{
  const dispatch = useDispatch();
  const [inputValue, setInputValue]=useState('');
  const cities = useSelector((state: RootState) => state.cities);

  function inputHandler(event:React.ChangeEvent):void{
    const target =event.target as HTMLFormElement;
    setInputValue(target.value)
  }
  
  function addCityFormHandler(event: React.SyntheticEvent):void{
    event.preventDefault();
    if(!cities.find(el=>el===inputValue)){
      cities.push(inputValue);
      dispatch(getCities(cities));
      setInputValue('');
    }
  }
  
    return (
         <Container>
             <Wrapper>
             <Form onSubmit={addCityFormHandler}>
                <Input onChange={inputHandler} value={inputValue} type="text" />
                <Button type='submit'>Add</Button>
              </Form>
            <Btn onClick={props.modalHandler}>Close</Btn>
            </Wrapper>
        </Container>
    )
}
