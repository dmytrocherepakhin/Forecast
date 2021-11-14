import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

export const Button = styled.button`
background: white;
  border-radius: 3px;
  border: 3px solid gray;
  color: gray;
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all .2s;

  :hover{
    color: white;
    background-color: gray;
    transition: all .2s;

    & a{
      color: white;
      transition: all .2s;
    }
  }
`
export const CityItemContainer = styled.div`
border:  3px solid gray;
width: 200px;
height: 200px;
margin: 10px;
padding: 10px;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 10px;

& a{
  color: gray;
  text-decoration: none;
  transition: all .2s;
}
`

function CityItem(props: any): JSX.Element {
  return (
    <CityItemContainer>
      <h2>{props.city}</h2>
      <Button ><Link to="city/:London">Show forecast</Link></Button>
      <Button>Delete city</Button>
    </CityItemContainer>
  )
}

export default CityItem
