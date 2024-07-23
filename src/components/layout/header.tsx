'use client'
import React, { useEffect, useState } from 'react';
import { Box, Image, HStack, Button, Text, useDisclosure, Flex, IconButton, Stack } from '@chakra-ui/react';
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
      // px={2}
      // py={1}
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      px={{base: '4'}}
      position={'fixed'}
      width="100%"
      zIndex="sticky"
      alignItems={'center'}
      backdropFilter={isScrolled ? 'blur(6px)' : 'none'}
      bg={isScrolled ? 'rgba(0, 0, 0, 0.6)' : 'transparent'}
      bgColor={'#000000'}
    >
      <Flex
        alignItems={'center'}
        justify={'space-between'}
        maxW="1250px"
        mx="auto"
      >
        <Image src='Hush Logo.svg' alt='Hush Protocol' boxSize={'80px'} />
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          color={"white"}
          bgColor={"transparent"}
          bgSize={'20px'}
          _hover={{
            bgColor: 'transparent'
          }}
        />
        <HStack
          as={'nav'}
          spacing={6}
          display={{ base: 'none', md: 'flex' }}
          flex={1}
          justify="center"
        >
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
        <Button
          bgColor={"white"}
          borderRadius={"10px"}
          display={{ base: 'none', md: 'flex' }}
          onClick={() => { window.location.href = 'https://www.github.com/The-Secret-Protocol' }}
        >
          <Text color={"black"}>Get Started</Text>
        </Button>
      </Flex>

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
