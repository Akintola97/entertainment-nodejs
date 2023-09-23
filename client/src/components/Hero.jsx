import React, { useState, useEffect } from "react";
import axios from "axios";
import backendUrl from "../config";

const Hero = () => {
  const [data, setData] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isGradientExpanded, setIsGradientExpanded] = useState(false);
  const transitionDelay = 20000;

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentItemIndex + 1) % data.length;
      setCurrentItemIndex(nextIndex);
    }, transitionDelay);

    return () => clearInterval(timer);
  }, [currentItemIndex, data]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/marvel/db`);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const currentItem = data[currentItemIndex]?.results[0];

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleGradientExpansion = () => {
    setIsGradientExpanded(!isGradientExpanded);
  };

  const gradientClass = isGradientExpanded
    ? "bg-gradient-to-b from-black"
    : "bg-gradient-to-t from-black";

  const goToPrevious = () => {
    const previousIndex = (currentItemIndex - 1 + data.length) % data.length;
    setCurrentItemIndex(previousIndex);
  };

  const goToNext = () => {
    const nextIndex = (currentItemIndex + 1) % data.length;
    setCurrentItemIndex(nextIndex);
  };

  function renderDescription(description, maxLength) {
    if (!description) {
      return "";
    }
    if (isExpanded) {
      return description;
    }
    return description.slice(0, maxLength) + "...";
  }

  return (
    <div
      className={`w-full md:h-screen h-[50vh] relative transition-opacity duration-500 ${
        isLoading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`md:w-full w-full md:h-full h-[50vh] overflow-hidden relative ${gradientClass}`}
      >
        {currentItem && (
          <img
            className="w-full h-full object-cover"
            src={`${currentItem.thumbnail?.path}.${currentItem.thumbnail?.extension}`}
            alt={currentItem.title}
            onLoad={() => setIsLoading(false)}
          />
        )}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 focus:outline-none transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 focus:outline-none transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
      <div
        className={`absolute md:w-[40%] w-full bottom-0 left-0 p-5 text-white ${gradientClass}`}
      >
        <h1 className="text-white font-bold text-[2.5rem] mb-2">
          {currentItem?.title}
        </h1>
        <p
          className={`text-white ${
            isExpanded ? "text-md" : "truncate-2-lines"
          }`}
        >
          {renderDescription(
            currentItem?.description,
            isExpanded ? Infinity : 150
          )}
        </p>
        {!isExpanded && (
          <button
            onClick={() => {
              toggleDescription();
              toggleGradientExpansion();
            }}
            className="text-blue-500 hover:underline focus:outline-none mt-2"
          >
            Read More
          </button>
        )}
        {isExpanded && (
          <button
            onClick={() => {
              toggleDescription();
              toggleGradientExpansion();
            }}
            className="text-blue-500 hover:underline focus:outline-none mt-2"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
