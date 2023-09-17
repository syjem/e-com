// import React from "react";
import "../../scss/_product-slider.scss";

import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import item1 from "../../assets/image-product-1.jpg";
import item2 from "../../assets/image-product-2.jpg";
import item3 from "../../assets/image-product-3.jpg";
import item4 from "../../assets/image-product-4.jpg";
import { useEffect, useState } from "react";

const Items = [
  {
    id: 1,
    src: item1,
  },
  {
    id: 2,
    src: item2,
  },
  {
    id: 3,
    src: item3,
  },
  {
    id: 4,
    src: item4,
  },
];

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

  return (
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
  );
}

export default ProductSlider;
