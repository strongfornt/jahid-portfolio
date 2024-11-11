/* eslint-disable react/prop-types */

import { useState } from "react";
import Card from "./Card";
// Custom Card component
import "./Marquee.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Ensure correct CSS import
import { Autoplay, Navigation} from 'swiper/modules';




export default function Marquee2({cards}) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);

    // Handle mouse enter and leave to pause and resume autoplay
    const handleMouseEnter = () => {
      if (swiperInstance) {
        swiperInstance.autoplay.stop();  // Stop autoplay when card is hovered
      }
    };
  
    const handleMouseLeave = () => {
      if (swiperInstance) {
        swiperInstance.autoplay.start();  // Restart autoplay when hover ends
      }
    };

  return (
    <>
     <div className="carousel-container">
      <Swiper
        modules={[ Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={4}           // Show 3 cards
        centeredSlides={true}       // Center the active slide
        loop={true}
        speed={1700}
       
        autoplay={{
            delay: 800,
            disableOnInteraction: true,
            // pauseOnMouseEnter: true, // Pause autoplay on hover (optional)
          }}     
        //   navigation={true}       // Enable infinite loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setSwiperInstance(swiper)}  // Store the swiper instance
        // pagination={{ clickable: true }}
       
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
                  onMouseEnter={handleMouseEnter}  // Pause on hover over individual card
                  onMouseLeave={handleMouseLeave} 
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
              <Card title={card.title} image={card.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  )
}
