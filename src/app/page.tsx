"use client";
import React from "react";
import { BoxesCore } from "@/components/landing/backgroundBoxes";
import { cn } from "@/lib/utils";
import { Box, Text } from "@chakra-ui/react";

export default function FloatingNavDemo() {
  return (
    <Box paddingTop={'40'} paddingBottom={'28'} marginX={{base:'0', md:'8', lg:'16'}}>
      <div className="h-96 relative w-50px overflow-hidden flex flex-col items-center justify-center rounded-xl">
      <div className="absolute inset-0 w-50px h-fullz-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <BoxesCore />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Secure Your Crypto Wallet with Ease
      </h1>
      <Text position={"relative"} >supp</Text>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Store and Recover Your Wallet Seed Phrase Safely and Decentralised, Powered by ICP
      </p>
    </div>
    
    </Box>
  );
}