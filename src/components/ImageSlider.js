import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ImageSlider = ({ menu }) => {
  const [user] = useAuthState(auth);
  const [current, setCurrent] = useState(0);
  const length = menu.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(menu) || menu.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <ArrowLeftIcon className="left-arrow" onClick={prevSlide} />
      <ArrowRightIcon className="right-arrow" onClick={nextSlide} />
      {menu.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {user? (<Link to={"detail/" + slide.id}>
              {index !== current || <img src={slide.image} className="image" />}
              <p class="img__description">
                <Typography sx={{ paddingTop: 1 }}>{slide.title}</Typography>
              </p>
            </Link>):(<Link to={"login"}>
              {index !== current || <img src={slide.image} className="image" />}
              <p class="img__description">
                <Typography sx={{ paddingTop: 1 }}>{slide.title}</Typography>
              </p>
            </Link>)}

            
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
