import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div 
    className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
    initial={{opacity: 0.2, y: 100}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}} 
    >
      <h1 className="text-3xl sm:text-4xl fontsemibold mb-2">
        Create AI  Images
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          className="w-80 xl:w-96 rounded-lg"
          src={assets.sample_image_1}
          alt=""
        />
      <div>
        <h2 className="text-3xl font-medium max-w-lg mb-4">Introducing the AI-Powered Text to Ghibli Image Generator</h2>
        <p className="text-gray-600 mb-4">
        Bring your imagination to life with our free AI-powered Ghibli-style image generator!
        Got an idea? Just describe it in your own words, and watch it turn into a magical, eye-catching Ghibli-inspired scene in seconds. Whether it's something stunning, whimsical, or completely unique — it's as simple as imagining it, typing it, and letting the magic unfold.
        </p>
        <p className="text-gray-600">
        Just type what you imagine, and let our AI bring it to life — Ghibli-style!
        From charming character portraits to dreamy landscapes and even ideas that don't exist yet — our powerful AI transforms your words into beautiful, high-quality Ghibli-inspired visuals in just seconds. With limitless creativity at your fingertips, the only limit is your imagination.
        </p>
      </div>
      </div>
    </motion.div>
  );
};

export default Description;
