import React, { useEffect, useState } from "react";
import apiss from "../apis/apiss";
import ImageCard from "./ImageCard";
import menu from'../apis/menu.json'; 

function Veggie() {
  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      try {
        const fetchedRecipes = await apiss.get("random");
        setVeggies(fetchedRecipes.data.recipes);
        console.log(fetchedRecipes.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };
    getPopular();
  }, []);

  return (
    <div>
      <h3 className="judul">Veggie Picts</h3>
      
        <ImageCard veggies={veggies}></ImageCard>
      
    </div>
  );
}

export default Veggie;
