// import React from "react";
import "../../scss/_product-slider.scss";

import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Stack from "@mui/material/Stack";

import { useEffect, useState } from "react";
import Items from "../../data/SliderItem";
import Thumbnails from "../../data/SliderThumbnail";

function ProductSlider() {
  const [showSlide, setShowSlide] = useState<number>(1);

  useEffect(() => {
    const totalSlides = Items.length;
    if (showSlide < 1) {
      setShowSlide(totalSlides);
    } else if (showSlide > totalSlides) {
      setShowSlide(1);
    }
  }, [showSlide]);

  const handlePrevNext = (n: number) => {
    setShowSlide(showSlide + n);
  };

  const handleThumbnailClick = (clickedId: number) => {
    if (showSlide !== clickedId) {
      setShowSlide(clickedId);
    }
  };

  return (
    <Stack gap={2} sx={{ width: "100%", maxWidth: "400px" }}>
      <section className="slider">
        <IconButton
          onClick={() => handlePrevNext(-1)}
          className="icon-button left"
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={() => handlePrevNext(1)}
          className="icon-button right"
        >
          <ChevronRightIcon />
        </IconButton>

        {Items.map((item) => (
          <div
            key={item.id}
            className={`item ${showSlide === item.id ? "active" : ""}`}
          >
            <img src={item.src} alt={`Item ${item.id}`} />
          </div>
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
