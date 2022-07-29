import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Category from '../components/Category';
import styled from 'styled-components';
import api from '../apis/api';

const Searched = () => {

  const [searchedRecipes, setSearchedRecipes] = useState([]);
const params = useParams();

useEffect(() => {
  const getSearched = async(name) =>{
  try{
      const fetchedRecipes = await api.get(`complexSearch?query=${name}`);
      setSearchedRecipes(fetchedRecipes.data.results);
      console.log(fetchedRecipes.data.results);
  
  }catch(error){
      console.log(error);
  }
  }
  getSearched(params.search);
      
  },[params.search])







return (
  <div>
    <Category/>
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/detail/" + item.id} >
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4></Link>
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
  margin-top: 2rem;
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
  }
`;

export default Searched