import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../assets/interfaces";
import { getCities } from "../../store/actions/actions";

const SLink = styled(Link)`
  width: 150px;
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
export const CityItemContainer = styled.div`
  border: 3px solid gray;
  width: 200px;
  height: 200px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  & a {
    color: gray;
    text-decoration: none;
    transition: all 0.2s;
  }
`;
export const Btn = styled.div`
  width: 150px;
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

function CityItem(props: any): JSX.Element {
  const cities = useSelector((state: RootState) => state.cities);
  const dispatch = useDispatch();

  const deleteCityHandler = (e: React.MouseEvent): void => {
    const target = e.currentTarget as HTMLInputElement;
    dispatch(getCities(cities.filter((el) => el !== target.id)));
  };

  return (
    <CityItemContainer>
      <h2>{props.city}</h2>
      <SLink to={"city/" + props.city}>Show forecast</SLink>
      <Btn onClick={deleteCityHandler} id={props.city}>
        Delete city
      </Btn>
    </CityItemContainer>
  );
}

export default CityItem;
