import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";
import { Box } from "@mui/material";
const ImageCard = ({ veggies }) => {
  return (
    <div>

     
          <Wrapper>
           
            <Splide options={{
              perPage: 3,
              arrows: true,
              pagination: false,
              drag: "free",
              gap: "5rem"
            }}>
              {veggies.map((veggie) => {
              return (
                <SplideSlide>
                  <Box className="kartu">
                  <p className="p">{veggie.title}</p>
                  <img
                    src={veggie.image}
                    alt={veggie.title}
                    className="gambarCard"
                  />
                  <Gradient/>
                </Box>
                </SplideSlide>
                
              );
            })}</Splide>            
          </Wrapper>
        

    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0 rem;
`;

const Gradient = styled.div`
z-index:3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
border-radius:2rem;`;

export default ImageCard;
