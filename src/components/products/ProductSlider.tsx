// import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import "../../scss/_product-slider.scss";
import Items from "../../data/SliderItem";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import Thumbnails from "../../data/SliderThumbnail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function ProductSlider() {
  const [showSlide, setShowSlide] = useState<number>(1);
  const totalSlides = Items.length;

  useEffect(() => {
    if (showSlide < 1) {
      setShowSlide(totalSlides);
    } else if (showSlide > totalSlides) {
      setShowSlide(1);
    }
    console.log(`Active Slide: ${showSlide}`);
  }, [showSlide, totalSlides]);

  const handlePrevNext = (n: number) => {
    setShowSlide(showSlide + n);
  };

  const handleThumbnailClick = (clickedId: number) => {
    setShowSlide(clickedId);
    console.log(`Clicked Id: ${clickedId}`);
  };

  return (
    <Stack gap={2} sx={{ width: "100%", maxWidth: "400px" }}>
      <section className="slider">
        <IconButton
          className="icon-button left"
          onClick={() => handlePrevNext(-1)}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          className="icon-button right"
          onClick={() => handlePrevNext(1)}
        >
          <ChevronRightIcon />
        </IconButton>

        {Items.map((item, index) => (
          <React.Fragment key={item.id}>
            {Math.abs(showSlide - index) <= 2 ? (
              <Box
                component="img"
                className={`item fade ${showSlide === item.id ? "active" : ""}`}
                src={item.src}
                alt={`Item ${item.id}`}
              />
            ) : null}
          </React.Fragment>
        ))}
      </section>
      <section className="thumbnail-section">
        {Thumbnails.map((item) => (
          <div
            className={`thumbnail ${showSlide === item.id ? "active" : ""}`}
            key={item.id}
          >
            <img
              src={item.src}
              alt={`thumbnail ${item.id}`}
              onClick={() => handleThumbnailClick(item.id)}
            />
          </div>
        ))}
      </section>
    </Stack>
  );
}

export default ProductSlider;
