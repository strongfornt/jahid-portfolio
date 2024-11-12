/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Card from "./Card";
import "./Marquee3.css";

export default function Marquee3({ cards }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Update the active index periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 1000); // Adjust timing for smooth transition
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="marquee-container">
      <Marquee gradient={false} speed={200} pauseOnHover={true}>
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

