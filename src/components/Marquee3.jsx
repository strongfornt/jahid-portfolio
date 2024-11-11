/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

import "./Marquee3.css";
import Card from "./Card";

export default function Marquee3({ cards }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to update the active index periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 1000); // Adjust timing for a smooth transition
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="marquee-container">
      <Marquee
        gradient={false}      // Disable gradient for continuous flow
        speed={200}            // Adjust speed for marquee effect
        pauseOnHover={true}   // Pause on hover
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`marquee-item ${index === activeIndex ? "active" : ""}`}
          >
            <Card title={card.title} image={card.image} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
