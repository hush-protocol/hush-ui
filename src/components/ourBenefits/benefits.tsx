"use client";
import {
  Box,
  VStack,
  Avatar,
  Heading,
  Text,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";

const Titles = [
    "No More Worries",
    "User-Friendly",
    "User-Friendly",
    "New User Onboarding",
    "Effortless Integration",
    "Trustless Environment"
  ];
  const Descriptions = [
    "Forgetting your seed phrase is a thing of the past.",
    "Simple steps for your secure storage and recovery",
    "We ensure there are no central points of failure",
    "Perfect for both seasoned crypto users and newcomers.",
    "Simple plugin for your easy wallet integration.",
    "Only you can access your all seed phrase"
  ];
  const Paths = [
    "",
    "",
    "",
    "",
    "",
    ""
  ];

export default function Benefits() {
  return (
    <Box maxW={"1200px"} mx="auto" p={4}>
      <VStack spacing={{ base: "8", lg: "12" }} textAlign={'center'}>
        <VStack maxW={{ base: '250px', lg: '400px' }}>
          <Heading fontWeight={"bold"} color={'white'}>Our Benefits</Heading>
          <Text color={'whitesmoke'} fontSize={'12px'}>
            From concept to execution, we empower your brand with design and
            development that will drive business growth.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg:3 }} spacing={10} w="full">
          {Titles.map((title, index) => (
            <Box
            key={index}
            p={4}
            px={6}
            borderRadius={'15px'}
            boxShadow='dark-lg'
            position="relative"
            textAlign="left"
            bg="gray.900"
            color="white"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "50%",
                borderTop: "0.5px solid",
                borderLeft: "0.5px solid",
                borderRight: "0.5px solid",
                borderColor: "whitesmoke",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                background: "transparent",
                zIndex: 1,
              }}
            >
              <HStack spacing={{base:'4', lg:'6'}} alignItems={'start'}>
                <Avatar size={"sm"} name="" src={Paths[index]} mb={4} />
                <VStack spacing={'0'} alignItems={{base:'start', lg:'start'}}>
                <Text fontWeight={"semibold"} fontSize={{base:'sm', lg:'md'}} mb={2}>
                    {title}
                </Text>
                <Text textAlign={'start'} fontSize={{ base: "14px", md: "sm", lg: "sm" }} color={"white"}>
                    {Descriptions[index]}
                </Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
