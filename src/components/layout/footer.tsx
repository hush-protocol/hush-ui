"use client";

import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Image,
  useColorModeValue,
  VStack,
  Heading,
  HStack,
} from "@chakra-ui/react";
import Logo from "../../../public/logo.png";
import githublogo from "../../../public/github-mark-white.png";

const Company = ["About Us", "Blog", ];

const Navigation = ["Home", "Products", "Contact"];

const Services = [
  "Wallet Security",
  "Decentralization",
  "Integration",
  "User Support",
];

export default function Footer() {
  return (
    <Box
      style={{
        borderTop: "1px solid",
        borderImage: "linear-gradient(to right, #000000, #ffffff, #000000) 1",
        borderImageSlice: 1,
      }}
      overflowY={'hidden'}
      bgColor={"black"}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "0", lg: "16" }}
        px={{ base: "12", lg: "24" }}
        w={"100%"}
        py={"4"}
      >
        <VStack
          alignItems="flex-start"
          spacing={"0"}
          maxW={{ base: "100%", lg: "60%" }}
        >
          <Image
            src={Logo.src}
            alt="Hush Protocol"
            boxSize={{ base: "80px", md: "100px", lg: "75px" }}
            objectFit="contain"
          />
          <Text color={"whitesmoke"} maxW={"90%"}>
            Discover the future of wallet security. Our protocol ensures that
            your seed phrase is stored and recovered in a fully decentralised
            and trustless environment, powered by Internet Computer Protocol
            (ICP).
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 3, md: 3, lg: 3 }}
          spacing={8}
          py={8}
          flexGrow={1}
          flexBasis={{ base: "100%", lg: "40%" }}
          minW={{ base: "100%", lg: "40%" }}
        >
          <Stack align={"flex-start"} spacing={"1"}>
            <Heading size={"md"} color={"whitesmoke"}>
              Company
            </Heading>
            {Company.map((company, index) => (
              <p
                key={index}
                className="text-white round opacity-50 text-[14px] font-[400]"
              >
                {company}
              </p>
            ))}
          </Stack>

          <Stack align={"flex-start"} spacing={"1"}>
            <Heading size={"md"} color={"whitesmoke"}>
              Navigation
            </Heading>
            {Navigation.map((navigation, index) => (
              <p
                key={index}
                className="text-white opacity-50 text-[14px] font-[400]"
              >
                {navigation}
              </p>
            ))}
          </Stack>

          <Stack align={"flex-start"} spacing={"1"}>
            <Heading size={"md"} color={"whitesmoke"}>
              Services
            </Heading>
            {Services.map((service, index) => (
              <p
                key={index}
                className="text-white opacity-50 text-[14px] font-[400]"
              >
                {service}
              </p>
            ))}
          </Stack>
        </SimpleGrid>
      </Stack>
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <div className='px-[9%] flex justify-between my-[34px]' >
          <Text color={'whitesmoke'}>© 2024 Hush Protocol All rights reserved</Text>
          <a href ="https://github.com/hush-protocol" target = "_blank " rel = "noopener noreferrer">
          <Image
            src={githublogo.src}
            alt="Hush Protocol"
            boxSize={{ base: "20px", md: "25px", lg: "30px" }}
            objectFit="contain"
            />
          </a>
          <Text color={'whitesmoke'}>User Terms & Conditions | Privacy Policy</Text>
          
        </div>
      </Box>
    </Box>
  );
}
