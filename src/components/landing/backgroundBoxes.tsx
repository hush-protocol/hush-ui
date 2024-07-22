"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(39).fill(1);
  const cols = new Array(30).fill(1);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(0deg) skewY(0deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex w-full h-full z-0 ",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-12 h-12 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: "whitesmoke",
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-12 h-12  border-r border-t  relative"
            >
          
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

