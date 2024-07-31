"use client";
import React from "react";
import { BoxesCore } from "./backgroundBoxes";
import { cn } from "@/lib/utils";
import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function HeroSection() {
  return (
    <Box
      paddingTop={{base: '28', lg: '32'}}
      textAlign="center"
    >
      <div className=" h-full relative w-full overflow-hidden flex flex-col items-center justify-center rounded-xl">
        <BoxesCore />
        <VStack spacing="4">
          <VStack spacing={-4}>
            <Box border={'1px linear-gradient(#FFFFFF, #2A09FF)'} borderRadius={'full'} px={'4'} py={'1'} bgColor={'#1C1C1C'} className={cn("relative z-20")}>
              <Text fontSize={{base:'12px', lg:'md'}} color={'white'} >Tierd of Storing Keys Manually ?</Text>
            </Box>
            <Heading
              fontSize={{ base: '4xl', md: '5xl', lg: '7xl' }}
              fontWeight="semibold"
              color="white"
              className={cn("relative z-20")}
              maxW={{base: '600', lg:'1000'}}
            >
              Forgot Your Private Key? Recover Seamlessly!
            </Heading>
          </VStack>
          <Text
            color="white"
            fontWeight="lg"
            fontSize={{ base: '10px', md: 'md', lg: 'md' }}
            textShadow="1px 1px #00020C"
            maxW={{ base: '200', lg: '411' }}
            className="relative z-20"
          >
            Store and Recover Your Wallet Keys  Safely Using email or social authentication, Powered by ICP
          </Text>
          <Button
          bgColor={"white"}
          borderRadius={"full"}
          display={'flex'}
          _hover={{
            transform: "scale(1.1)"
          }}
          onClick={() => { window.location.href = 'https://www.github.com/The-Secret-Protocol' }}
        >
          <HStack spacing={2} alignItems="center">
            <Text color={"black"}>Get Started</Text>
            <RiArrowRightUpLine />
          </HStack>
        </Button>
        </VStack>
      </div>
    </Box>
  );
}