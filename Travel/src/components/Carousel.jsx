import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1602102488252-c4c3daadf1c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5lcGFsfGVufDB8fDB8fHww",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661902004576-4680d275f234?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1589800463007-3be49fe18b92?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5lcGFsfGVufDB8fDB8fHww",
  },
  {
    url: "https://images.unsplash.com/photo-1553886334-43d24f24d3bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5lcGFsfGVufDB8fDB8fHww",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661963150123-86df7bb25849?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5lcGFsfGVufDB8fDB8fHww",
  },
  {
    url: "https://images.unsplash.com/photo-1586100345684-a135906ef03c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG5lcGFsfGVufDB8fDB8fHww",
  },
  {
    url: "https://images.unsplash.com/photo-1610997686651-98492fd08108?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG5lcGFsfGVufDB8fDB8fHww",
  }
  
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-black cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-black cursor-pointer right-8"
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <img className="w-full rounded-md" src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
