import React, { useEffect, useState } from "react";
import Category from "../components/Category";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setcuisine] = useState([]);
  let params = useParams();

  const getcuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=b3c92fe53af44f178e647febf833de93&cuisine=${name}`
    );
    const recipes = await data.json();
    setcuisine(recipes.results);
  };

  useEffect(() => {
    getcuisine(params.type);
    console.log(params.type);
  }, [params.type]);
  return (
    <div>
      <Category />
      <Grid>
        {cuisine.map((item) => {
          return (
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
  }
`;

export default Cuisine;
