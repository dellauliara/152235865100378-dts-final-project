
import React, { useEffect, useState } from 'react'
import Category from "../components/Category";
import api from '../apis/api';
import ImageSlider from "../components/ImageSlider";
import ImageCard from "../components/ImageCard";

function Home() {

  const [popular, setPopular] = useState([]);
  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
  const getPopular = async() =>{
  try{
      const fetchedRecipes = await api.get("random?number=9");
      setPopular(fetchedRecipes.data.recipes);
      console.log(fetchedRecipes.data.recipes);
  
  }catch(error){
      console.log(error);
  }
  }
  getPopular();
      
  },[])





  useEffect(() => {
    const getVeggie = async () => {
      try {
        const fetchedRecipes = await api.get("random?intolerances=dairy&number=9");
        setVeggies(fetchedRecipes.data.recipes);
        console.log(fetchedRecipes.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };
    getVeggie();
  }, []);

  return (
    <div>
      <Category />
      <h3 className='judul'>Yummie Food</h3>
       <ImageSlider menu={popular} className="image"/>
       <h3 className="judul">Dairy Free Yummie</h3>
       <ImageCard veggies={veggies}></ImageCard>
    
    </div>
  )
}

export default Home