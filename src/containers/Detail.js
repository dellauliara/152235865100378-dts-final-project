import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Category from "../components/Category";
import api from '../apis/api';

const Detail = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  useEffect(() => {
    const fetchDetails = async() =>{
    try{
        const fetchedRecipes = await api.get(`${params.name}/information`);
        setDetails(fetchedRecipes.data);
        console.log(fetchedRecipes.data);
    
    }catch(error){
        console.log(error);
    }
    }
    fetchDetails();
        
    },[params.name])
  

  return (
    <>
    <Category/>
    <DetailWrapper>
      <div className="detail">
        <h2>{details.title}</h2>
        <img src={details.image} alt=" " />
        <h5>Summary</h5>
        <h3 dangerouslySetInnerHTML={{__html: details.summary}} ></h3>
      </div>
      <Info>
        <div className="note">
        
        <h3>Ready in : {details.readyInMinutes} mins</h3> 
        <h3>Servings : {details.servings}</h3>
         
        </div>



        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && 
        (
            <div>           
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}} ></h3>
        </div>
        ) }
         {activeTab === 'ingredients' && (<ul>
            {details.extendedIngredients.map((ingredient) =>
            <li key={ingredient.id}>{ingredient.original}</li>
            )}
        </ul>)}
        
      </Info>
    </DetailWrapper></>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #ffffff;
  }
  h2 {
    margin-bottom: 2rem;
    
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  h3{
    font-size: 0.9rem;
    text-align: justify;
  }
  h5{
    margin-top: 1.5rem;
    font-size: 1.5rem;
    text-align: justify;
    color: #000000
  }
  
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
padding: 1rem 2rem;
color #313131;
background: #FFFFFF;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`;

const Info = styled.div`
  margin: 3.5rem 24rem;
  padding-left: 17rem;
  position: absolute
`;
export default Detail;
