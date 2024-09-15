"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export const ThreeDCardDemo = ({ imageUrl }) => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center">
      <CardContainer className="inter-var">
        <CardBody
          className={`
            bg-white bg-opacity-10 
            backdrop-filter backdrop-blur-lg 
            p-6 rounded-lg m-4
            shadow-lg border 
            border-white border-opacity-30 
            relative 
            transition-shadow 
            duration-300 
            ease-in-out 
            hover:shadow-[0px_4px_20px_0px_rgba(0,255,255,0.4)] 
            dark:bg-black dark:bg-opacity-20 dark:border-opacity-20
            w-full sm:w-[28rem] 
          `}
        >
          <CardItem
            translateZ="50"
            className="text-xl font-semibold text-gray-200 mb-4 text-center"
          >
            CodeChef
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={imageUrl}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>

      {/* Additional cards can be placed here, following the same structure */}
    </div>
  );
};
