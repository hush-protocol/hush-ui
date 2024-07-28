"use client";
import React from "react";
import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import HeroSection from "@/components/hero/herosection";
import TimeLine from "@/components/timeline/timeline";
import Benefits from "@/components/ourBenefits/benefits";

export default function Landing() {
  return (
    <VStack spacing={{base:'8', lg:'16'}}>
      <HeroSection />
      <Benefits />
      <TimeLine />
    </VStack>
  );
}
