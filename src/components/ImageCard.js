import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";
import { Box } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";
const ImageCard = ({ veggies }) => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Wrapper>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: true,
            drag: "free",
            gap: "3rem",
          }}
        >
          {veggies.map((veggie) => {
            return (
              <SplideSlide>
                <Box className="kartu">
              {user? (<Link to={"detail/"+veggie.id}>
                    <p className="p">{veggie.title}</p>
                    <img
                      src={veggie.image}
                      alt={veggie.title}
                      className="gambarCard"
                    />
                    <Gradient />
                  </Link>):(<Link to={"login"}>
                    <p className="p">{veggie.title}</p>
                    <img
                      src={veggie.image}
                      alt={veggie.title}
                      className="gambarCard"
                    />
                    <Gradient />
                  </Link>)}
                  
                </Box>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0 rem;
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  border-radius: 2rem;
`;

export default ImageCard;
