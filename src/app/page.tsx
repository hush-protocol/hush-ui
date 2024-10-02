"use client";
import React from "react";
import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import HeroSection from "@/components/hero/herosection";
import Benefits from "@/components/ourBenefits/benefits";
import TrustedPartners from "@/components/trustedPartners/trustedPartners";
import Milestones from "@/components/timeline/ourJourney";
import ContactUs from "@/components/contactUs/contactUs";
import Footer from "@/components/layout/footer";
import Faq from "@/components/FAQ/faq";
import {Timeline} from "@/components/timeline/timeline";

export default function Landing() {
  return (
    <VStack spacing={{base:'8', lg:'16'}}>
      <HeroSection />
      {/* <TrustedPartners /> */}
      <Benefits />
      {/* <Milestones /> */}
      {/* <Faq /> */}
      <Timeline />
      <ContactUs />
      <Footer />
    </VStack>
  );
}
