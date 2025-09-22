"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "framer-motion";

const dotVariants: Variants = {
  closed: () => ({
    y: 0,
    scale: 1,
  }),
  open: (custom: number) => ({
    y: custom,
    scale: custom === 0 ? 2 : 1,
  }),
  hover: (custom: number) => ({
    y: custom * 1.2,
    scale: custom === 0 ? 2.2 : 1.1,
    transition: { duration: 0.2 },
  }),
};

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.div
      onClick={handleClick}
      className="z-20 flex cursor-pointer flex-col gap-1 p-4 xl:hidden"
      animate={isOpen ? "open" : "closed"}
      whileHover="hover"
    >
      <motion.div
        custom={9}
        variants={dotVariants}
        className="h-1.5 w-1.5 rounded-full bg-black dark:bg-white"
        transition={{ duration: 0.3 }}
      />
      <motion.div
        custom={0}
        variants={dotVariants}
        className="h-1.5 w-1.5 rounded-full bg-black dark:bg-white"
        transition={{ duration: 0.3 }}
      />
      <motion.div
        custom={-9}
        variants={dotVariants}
        className="h-1.5 w-1.5 rounded-full bg-black dark:bg-white"
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Hamburger;
