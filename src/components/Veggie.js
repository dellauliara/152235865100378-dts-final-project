import React, { useEffect, useState } from "react";
import apiss from "../apis/apiss";
import ImageCard from "./ImageCard";

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
      {veggies.map((veggie) => (
        <ImageCard veggie={veggie}></ImageCard>
      ))}
    </div>
  );
}

export default Veggie;
