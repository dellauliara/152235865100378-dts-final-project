import { FaIceCream } from "react-icons/fa";
import { TbSoup } from "react-icons/tb";
import { GiFruitBowl, GiSaucepan } from "react-icons/gi";

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Category() {
  return (
    <div className="List" >
      <Slink to={'/type/dessert'}>
        <FaIceCream />
        <h5>Dessert</h5>
      </Slink>

      <Slink to={'/type/appetizer'}>
        <TbSoup />
        <h5>Appetizer</h5>
      </Slink>

      <Slink to={'/type/salad'}>
        <GiFruitBowl />
        <h5>Salad</h5>
      </Slink>

      <Slink to={'/type/sauce'}>
        <GiSaucepan />
        <h5>Sauce</h5>
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

&.active{
  background: #f29ab4;
  svg{
    color: #FFFFFF
  }
  h4{
    color: #FFFFFF
  }
}

`;


export default Category;
