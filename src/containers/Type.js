import React, { useEffect, useState } from "react";
import Category from "../components/Category";
import styled from "styled-components";
import api from '../apis/api';
import { Link, useParams } from "react-router-dom";


function Type() {
  const [cuisine, setcuisine] = useState([]);
  let params = useParams();
  useEffect(() => {
    const getcuisine = async(name) =>{
    try{
        const fetchedRecipes = await api.get(`complexSearch?type=${name}`);
        setcuisine(fetchedRecipes.data.results);
        console.log(fetchedRecipes.data.results);
    
    }catch(error){
        console.log(error);
    }
    }
    getcuisine(params.type);
        
    },[params.type])

  return (
    <div>
      
      <Category />
      <Grid>
        {cuisine.map((item) => {
          return (
            
          <Link to={"/detail/" + item.id} >
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
            </Link>
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
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
    text-decoration: none;
  }
`;

export default Type;
