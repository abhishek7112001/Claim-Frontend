import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  const cards = [
    {
      id: 1,
      name: "Vehicle Insurance",
      image: "./car.png", // Replace with your image URL
      description: "Protect your vehicle from unexpected damages and losses.",
    },
    {
      id: 2,
      name: "Health Insurance",
      image: "./health.png", 
      description: "Comprehensive health coverage for you and your family.",
    },
    {
      id: 3,
      name: "Home Insurance",
      image: "./home.png", 
      description: "Secure your home from accidents, theft, and damages.",
    },
  ];

  return (
    <div className="flex justify-center space-x-8 m-10">
      {cards.map((card) => (
        <Link
          to={"/Policy"}
          key={card.id}
          className="relative w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500"

        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white p-4">
            <div>
              <h3 className="text-3xl font-semibold mb-2">{card.name}</h3>
              <p className="text-lg">{card.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Hero;
