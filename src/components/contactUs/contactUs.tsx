'use client'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  HStack,
  Textarea,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';


export default function ContactUs() {
  return (
    <Flex
      align="center"
      justify="center"
      id="contact"
      position="relative"
      minH="100vh"
    >
      <Box
        borderRadius="lg"
        maxW={{ base: '380px', lg: '1100px' }}
        position="relative"
        zIndex={1}
      >
        <VStack spacing={{ base: 16, md: 8, lg: 12 }}>
          <VStack
            maxW={{ base: '250px', lg: '340px' }}
            maxH={{ base: '50px', lg: '90px' }}
            textAlign="center"
          >
            <Heading fontWeight="bold" color="white">
              Contact Us
            </Heading>
            <Text color="whitesmoke" fontSize={{ base: '12px', lg: 'sm' }}>
              We are here to help. Reach out for support, inquiries and any feedback appreciated.
            </Text>
          </VStack>
          <Box
            borderRadius="30px"
            border="1px solid whitesmoke"
            bgColor="gray.900"
            width={{ base: '380px', lg: '430px' }}
            p={8}
            shadow="base"
          >
            <VStack spacing={5}>
              <HStack spacing={2}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <BsPerson />
                    </InputLeftElement>
                    <Input type="text" name="name" placeholder="Your Name" />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <MdOutlinePhone />
                    </InputLeftElement>
                    <Input type="number" name="phone" placeholder="Phone Number" />
                  </InputGroup>
                </FormControl>
              </HStack>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <MdOutlineEmail />
                  </InputLeftElement>
                  <Input type="email" name="email" placeholder="Your Email" />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Queries / Feedback</FormLabel>
                <Textarea
                  name="queries"
                  placeholder="Your Message"
                  rows={6}
                  resize="none"
                />
              </FormControl>

              <Button
                bgColor="black"
                color="white"
                width="full"
              >
                Submit
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Box>

      <Box
        position="absolute"
        display={{ base: 'none', lg: 'block' }}
        left={{ base: '-10px', lg: '-190px' }}
        bottom = {{base:'', lg:'60px'}}
        transform="rotate(-7deg)"
        borderRadius="30px"
        // border="1px solid whitesmoke"
        bgColor="gray.900"
        width={{ base: '300px', lg: '450px' }}
        height={{ base: '200px', lg: '400px' }}
        zIndex={0}
      />

      <Box
        position="absolute"
        display={{ base: 'none', lg: 'block' }}
        right={{ base: '-10px', lg: '-190px' }}
        // top={{base: 'none', lg:'0px'}}
        bottom = {{base:'', lg:'60px'}}
        // bottom="0"
        transform="rotate(7deg)"
        borderRadius="30px"
        // border="1px solid whitesmoke"
        bgColor="gray.900"
        width={{ base: '300px', lg: '450px' }}
        height={{ base: '200px', lg: '400px' }}
        zIndex={0}
      />
    </Flex>
  );
}
