"use client";

import React from 'react';
import {motion} from 'framer-motion';

export const Section:React.FC = () => {
  return (
    <motion.div
      className="bg-gray-200 mb-24 my-36 h-44 w-1 rounded-full  sm:mb-18  dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  )
}