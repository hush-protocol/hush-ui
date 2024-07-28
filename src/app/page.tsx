"use client";
import React from "react";
import { BoxesCore } from "@/components/hero/backgroundBoxes";
import { cn } from "@/lib/utils";
import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { RiArrowRightUpLine } from "react-icons/ri";
import HeroSection from "@/components/hero/herosection";
import TimeLine from "@/components/timeline/timeline";

export default function Landing() {
  return (
    <VStack>
      <HeroSection />
      <TimeLine />
    </VStack>
  );
}
