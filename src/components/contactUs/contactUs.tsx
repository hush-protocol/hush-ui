'use client'

import React from 'react';
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
import { useForm, SubmitHandler } from 'react-hook-form';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import emailjs from 'emailjs-com';
interface FormData {
  name: string;
  phone: string;
  email: string;
  queries: string;
}

export default function ContactUs() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const sendEmail: SubmitHandler<FormData> = async (formData) => {
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'undefined',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||'undefined',
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          queries: formData.queries

        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID || 'undefined'
      );
      console.log(result.text);
      alert('Message sent successfully!');
      reset();
    } catch (error) {
      console.log(error);
      alert('Failed to send the message. Please try again.');
    }
  };

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
            as="form"
            onSubmit={handleSubmit(sendEmail)}
            borderRadius="30px"
            border="0.1px solid #7b7b7b"
            boxShadow={'lg'}
            bgColor="gray.900"
            width={{ base: '380px', lg: '430px' }}
            p={8}
          >
            <VStack spacing={5}>
              <HStack spacing={2}>
                <FormControl isRequired>
                  <FormLabel color={'white'}>Name</FormLabel>
                  <InputGroup> 
                    <InputLeftElement>
                      <BsPerson color='white'/>
                    </InputLeftElement>
                    <Input 
                      type="text" 
                      placeholder="Your Name" 
                      focusBorderColor="#707070"
                      color="white"
                      {...register('name', { required: true })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color={'white'}>Phone Number</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <MdOutlinePhone color='white'/>
                    </InputLeftElement>
                    <Input 
                      type="number" 
                      placeholder="Phone Number" 
                      focusBorderColor="#707070"
                      color="white"
                      {...register('phone', { required: true })}
                    />
                  </InputGroup>
                </FormControl>
              </HStack>

              <FormControl isRequired>
                <FormLabel color={'white'}>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <MdOutlineEmail color='white' />
                  </InputLeftElement>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    focusBorderColor="#707070"
                    color="white"
                    {...register('email', { required: true })}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel color={'white'}>Queries / Feedback</FormLabel>
                <Textarea
                  placeholder="Your Message"
                  focusBorderColor="#707070"
                  color="white"
                  rows={6}
                  resize="none"
                  {...register('queries', { required: true })}
                />
              </FormControl>

              <Button
                bgColor="black"
                color="white"
                width="full"
                isLoading={isSubmitting}
                type="submit"
                _hover={{
                  bgColor: '#050505'
                }}
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
        bottom={{ base: '', lg: '60px' }}
        transform="rotate(-7deg)"
        borderRadius="30px"
        bgColor="gray.900"
        width={{ base: '300px', lg: '450px' }}
        height={{ base: '200px', lg: '400px' }}
        zIndex={0}
      />

      <Box
        position="absolute"
        display={{ base: 'none', lg: 'block' }}
        right={{ base: '-10px', lg: '-190px' }}
        bottom={{ base: '', lg: '60px' }}
        transform="rotate(7deg)"
        borderRadius="30px"
        bgColor="gray.900"
        width={{ base: '300px', lg: '450px' }}
        height={{ base: '200px', lg: '400px' }}
        zIndex={0}
      />
    </Flex>
  );
}
