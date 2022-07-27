import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Category() {
  return (
    <div className="List" >
      <Slink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h5>Italian</h5>
      </Slink>

      <Slink to={'/cuisine/American'}>
        <FaHamburger />
        <h5>American</h5>
      </Slink>

      <Slink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h5>Thai</h5>
      </Slink>

      <Slink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h5>Japanese</h5>
      </Slink>
    </div>
  );
}

const Slink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);
color: #FFFFFF;
font-size: 1.5rem;



`;


export default Category;
