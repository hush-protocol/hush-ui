"use client";

import {
  Box,
  Stack,
  SimpleGrid,
  Text,
  Image,
  VStack,
  Heading,
  Link,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../../../public/logo.png";
import { FaGithub, FaTwitter, FaTelegram } from "react-icons/fa";

const Company = ["About Us", "Blog"];
const Navigation = ["Home", "Products", "Contact"];
const Services = ["Wallet Security", "Decentralization", "Integration", "User Support"];

export default function Footer() {
  const iconSize = useBreakpointValue({ base: 24, md: 30 });
  const isHalfScreen = useBreakpointValue({ base: false, md: true })

  return (
    <Box
      style={{
        borderTop: "1px solid",
        borderImage: "linear-gradient(to right, #000000, #ffffff, #000000) 1",
        borderImageSlice: 1,
      }}
      overflowY={"hidden"}
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
        <VStack alignItems="flex-start" spacing={4} maxW={{ base: "100%", lg: "60%" }}>
          <Image
            src={Logo.src}
            alt="Hush Protocol"
            boxSize={{ base: "80px", md: "100px", lg: "75px" }}
            objectFit="contain"
          />
          <Text color={"whitesmoke"} maxW={"90%"}>
            Discover the future of wallet security. Our protocol ensures that your seed phrase is stored
            and recovered in a fully decentralised and trustless environment, powered by Internet Computer
            Protocol (ICP).
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 3, lg: 3 }}
          spacing={8}
          py={8}
          flexGrow={1}
          flexBasis={{ base: "100%", lg: "40%" }}
          minW={{ base: "100%", lg: "40%" }}
        >
          <Stack align={"flex-start"} spacing={2}>
            <Heading size={"md"} color={"whitesmoke"}>
              Company
            </Heading>
            {Company.map((item, index) => (
              <Text key={index} className="text-white opacity-50 text-[14px] font-[400]">
                {item}
              </Text>
            ))}
          </Stack>

          <Stack align={"flex-start"} spacing={2}>
            <Heading size={"md"} color={"whitesmoke"}>
              Navigation
            </Heading>
            {Navigation.map((item, index) => (
              <Text key={index} className="text-white opacity-50 text-[14px] font-[400]">
                {item}
              </Text>
            ))}
          </Stack>

          <Stack align={"flex-start"} spacing={2}>
            <Heading size={"md"} color={"whitesmoke"}>
              Services
            </Heading>
            {Services.map((item, index) => (
              <Text key={index} className="text-white opacity-50 text-[14px] font-[400]">
                {item}
              </Text>
            ))}
          </Stack>
        </SimpleGrid>
      </Stack>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")}>
        <div className="px-[9%] flex flex-col md:flex-row justify-between items-center my-[34px]">
          <Text color={"whitesmoke"} mb={{ base: 4, md: 0 }}>
            © 2024 Hush Protocol All rights reserved
          </Text>

          <Stack direction="row" spacing={4} justify="center" align="center" mb={{ base: 4, md: 0 }}>
            <Link href="https://github.com/hush-protocol" isExternal>
              <FaGithub size={iconSize} color="whitesmoke" />
            </Link>
            <Link href="https://twitter.com/hush-protocol" isExternal>
              <FaTwitter size={iconSize} color="whitesmoke" />
            </Link>
            <Link href="https://telegram.org/hush-protocol" isExternal>
              <FaTelegram size={iconSize} color="whitesmoke" />
            </Link>
          </Stack>

          <Text color={"whitesmoke"}>User Terms & Conditions | Privacy Policy</Text>
        </div>
      </Box>
    </Box>
  );
}
 