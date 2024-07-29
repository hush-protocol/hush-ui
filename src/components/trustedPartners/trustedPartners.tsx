import React from "react";
import { Box, Avatar, chakra, HStack } from "@chakra-ui/react";

const ChakraSVG = chakra("svg");

const TrustedPartners = () => {
  return (
    <Box position="relative" w={{base: '380px', lg:'880px'}} h={{base: '160px', lg:'400px'}} background="transparent">
      {/* Main logo */}
      <HStack  alignItems={'center'} justifyContent={'space-between'}>
      <Avatar
        name="Logo 5"
        src="/path-to-logo-4.png"
        position="absolute"
        right="30%"
        top="50%"
        size="sm"
      />
      <Avatar
        name="Main Logo"
        src="/path-to-main-logo.png"
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        size="lg"
      />
      <Avatar
        name="Logo 6"
        src="/path-to-logo-4.png"
        position="absolute"
        right="30%"
        top="50%"
        size="sm"
      />
      </HStack>
      {/* Surrounding logos */}
      <Avatar
        name="Logo 1"
        src="/path-to-logo-1.png"
        position="absolute"
        left="10%"
        top="10%"
        size="md"
      />
      <Avatar
        name="Logo 2"
        src="/path-to-logo-2.png"
        position="absolute"
        right="10%"
        top="10%"
        size="md"
      />
      <Avatar
        name="Logo 3"
        src="/path-to-logo-3.png"
        position="absolute"
        left="10%"
        bottom="10%"
        size="md"
      />
      <Avatar
        name="Logo 4"
        src="/path-to-logo-4.png"
        position="absolute"
        right="10%"
        bottom="10%"
        size="md"
      />
      {/* Connecting lines */}
      {/* <ChakraSVG
        as="svg"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
      >
        <line x1="50%" y1="50%" x2="10%" y2="10%" stroke="grey" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="90%" y2="10%" stroke="grey" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="10%" y2="90%" stroke="grey" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="90%" y2="90%" stroke="grey" strokeWidth="2" />
      </ChakraSVG> */}
    </Box>
  );
};

export default TrustedPartners;
