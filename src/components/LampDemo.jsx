"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Button from "./Button";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl font-montserrat"
      >
        CSI VIIT Presents <br />
        <span className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-clip-text text-transparent text-6xl md:text-9xl font-[ClutterCoder]">
          SoloCodeX
        </span>
        {/* Add new content here */}
        <h2 className="text-2xl text-white mt-6 font-montserrat">
          Sep 25, 2024 - Sep 26, 2024
        </h2>
        <p className="text-lg text-gray-300 mt-6 max-w-xl mx-auto">
          Prepare yourself for an intense and thrilling coding competition where
          the best minds will compete for amazing prizes. Sharpen your coding
          skills and join us for SoloCodeX!
        </p>
        <div className="mt-8 flex items-center justify-center">
          <Button
            label="Register Now"
            backgroundColor="bg-gradient-custom"
            textColor="text-white"
            borderColor="border-black"
          />
        </div>
      </motion.h1>
    </LampContainer>
  );
}
