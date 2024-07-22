'use client'
import React, { useEffect, useState } from 'react';
import { Box, Heading, Image, HStack, Button, Text, useDisclosure, Flex, IconButton, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const Links = ['Products', 'Use Cases', 'Blog', 'About Us', 'Contact Us']

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      color={"white"}
      _hover={{
        textDecoration: 'none',
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handle = window.addEventListener('scroll', handleScroll);

    return () => {
      handle
    };
  }, []);


  return (
      <Box 
      px={24} 
      py={4} 
      position={'fixed'}
      zIndex="sticky" 
      alignItems={'center'}
      backdropFilter={isScrolled ? 'blur(6px)' : 'none'}>
        <HStack spacing={'64'} alignItems={'center'} justify={'space-between'}>
        <Text color={'white'}>Hush Logo</Text>
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color={"white"}
            bgColor={"transparent"}
            _hover={{
              bgColor : 'transparent'
            }}
          />
          {/* <HStack spacing={'64'} alignItems={'center'} justifyContent={'space-between'}> */}
            <HStack as={'nav'} spacing={6} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <Button
              mx={12}
              bgColor={"transparent"}
              border="2px solid"
              borderRadius={"20px"}
              alignItems={"center"}
              _hover={{
                bgColor: "transparent",
                border: "3px solid",
                transform: "scale(1.1)"
              }}
              onClick={() => {window.location.href='https://www.github.com/The-Secret-Protocol'}}
            >
              <HStack spacing={2} alignItems="center">
                <Text color={"white"}>Get Started</Text>
              </HStack>
          </Button>
          </HStack>
        {/* </HStack> */}

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
  );
};
