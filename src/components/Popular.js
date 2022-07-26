import React, { useEffect, useState } from'react';

import api from '../apis/api';
import ImageSlider from './ImageSlider';


function Popular() {

    const [popular, setPopular] = useState([]);


useEffect(() => {
const getPopular = async() =>{
try{
    const fetchedRecipes = await api.get("random");
    setPopular(fetchedRecipes.data.recipes);
    console.log(fetchedRecipes.data.recipes);

}catch(error){
    console.log(error);
}
}
getPopular();
    
},[])

    return(
        <div>
            <h3 className='judul'>Popular Picts</h3>
           <ImageSlider slides={popular}/>
                     
            </div>
    )
}

export default Popular