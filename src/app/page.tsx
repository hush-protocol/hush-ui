"use client";
import React from "react";
import { BoxesCore } from "@/components/landing/backgroundBoxes";
import { cn } from "@/lib/utils";
import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function Landing() {
  return (
    <Box
      paddingTop={{base: '28', lg: '32'}}
      textAlign="center"
    >
      <div className=" h-full relative w-full overflow-hidden flex flex-col items-center justify-center rounded-xl">
        <BoxesCore />
        <VStack spacing="4">
          <VStack spacing={-4}>
            <Box border={'1px solid linear-gradient(#FFFFFF, #2A09FF)'} borderRadius={'full'} px={'4'} py={'1'} bgColor={'#1C1C1C'} className={cn("relative z-20")}>
              <Text fontSize={{base:'12px', lg:'md'}} color={'white'} >Bring your business to the best scale</Text>
            </Box>
            <Heading
              fontSize={{ base: '5xl', md: '5xl', lg: '8xl' }}
              fontWeight="semibold"
              color="white"
              className={cn("relative z-20")}
              maxW={{base: '500', lg:'900'}}
            >
              Secure Your Crypto Wallet with Ease
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
            Store and Recover Your Wallet Seed Phrase Safely and Decentralised, Powered by ICP
          </Text>
          <Button
          bgColor={"white"}
          borderRadius={"full"}
          display={{ base: 'none', md: 'flex' }}
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
