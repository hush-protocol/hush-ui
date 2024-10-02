import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Heading,
  Center
} from '@chakra-ui/react';
import HackImg from '../../../public/hackathon.jpg';
import productImg from '../../../public/product.jpg';
import whitepaper from '../../../public/whitepaper.jpg';
import prototypeImg from '../../../public/prototype.jpg';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from "react";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";


const milestones = [
  {
    id: 1,
    date: 'November 10, 2023',
    title: 'Hackathon Victory',
    description: `Secured the top position at the prestigious Encode Club X ICP:  Zero to DApp Awesome ICP Track.`
  },
  {
    id: 2,
    date: 'December 10, 2023',
    title: 'Prototype Development',
    description: `Successfully designed and launched our initial prototype, which demonstrated the core capabilities of secure and decentralized wallet recovery.`
  },
  {
    id: 3,
    date: 'Aug 1, 2024',
    title: 'Whitepaper & Landing page',
    description:
      'Published our comprehensive whitepaper and Launched the landing page for user engagement.'
  },
  {
    id: 4,
    date: 'December 30, 2024',
    title: 'Product Development',
    description:
      'Implementing features such as email / Social Auth signature verification, email recovery, and on-chain encrypted storage.'
  }
];

const milestoneImages = [
  {
    id: 1,
    url: HackImg
  },
  {
    id: 2,
    url: prototypeImg
  },
  {
    id: 3,
    url: whitepaper
  },
  {
    id: 4,
    url: productImg
  }
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  return (
    <div className="w-full dark:bg-neutral-950 font-sans md:px-10" ref={containerRef}>
      
    
    <Container maxWidth="1100px" p={{ base: 2, sm: 10 }}>
      <Center>
        <VStack maxW={{ base: '220px', lg: '340px' }} maxH={{ base: '50px', lg: '90px' }} textAlign={'center'} marginBottom={{ base: '16', lg: '12' }}>
          <Heading fontWeight="bold" color={'white'}>
            Our Journey
          </Heading>
          <Text color={'whitesmoke'} fontSize={{ base: '12px', lg: 'sm' }}>
            Hush Protocol is proud of its continuous progress and achievements in the field of crypto security.
          </Text>
        </VStack>
      </Center>
      {milestones.map((milestone) => {
        const image = milestoneImages.find(img => img.id === milestone.id);
        return (
          <Flex key={milestone.id} mb="10px">
            {isDesktop && milestone.id % 2 !== 0 && (
              <>
                <ImageCard {...(image || { id: milestone.id, url: "" })} />
                <LineWithDot />
                <Card {...milestone} />
              </>
            )}

            {isDesktop && milestone.id % 2 === 0 && (
              <>
                <Card {...milestone} />
                <LineWithDot />
                <ImageCard {...(image || { id: milestone.id, url: "" })} />
              </>
            )}

            {isMobile && (
              <>
                <LineWithDot />
                <VStack>
                  {image && <ImageCard {...image} />}
                  <Card {...milestone} />
                </VStack>
              </>
            )}
          </Flex>
        );
      })}
    </Container>
    </div>
  );
};

interface CardProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

const Card = ({ id, title, description, date }: CardProps) => {
  const isEvenId = id % 2 == 0;
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = 'unset';
    rightValue = '-15px';
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={'transparent'}
      spacing={5}
      rounded="lg"
      alignItems="center"
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? 'teal.400' : 'blue.400'}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 color={'white'} fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md" color={'whitesmoke'}>{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

interface ImageCardProps {
  id: number;
  url: StaticImageData | string;
}

const ImageCard = ({ id, url }: ImageCardProps) => {
  const isEvenId = id % 2 === 0;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const leftValue = isMobile || !isEvenId ? 'unset' : '-15px';
  const rightValue = isMobile || isEvenId ? '-15px' : 'unset';

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={'transparent'}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
    >
      <Box
        w={{ base: '290px', lg: '400px' }}
        h={{ base: '150px', lg: '300px' }}
        bgColor={'white'}
        rounded="lg"
        pos="relative"
        overflow="hidden"
      >
        {typeof url === 'string' ? (
          <Box
            backgroundImage={`url(${url})`}
            backgroundSize="cover"
            backgroundPosition="center"
            w="100%"
            h="100%"
          />
        ) : (
          <Image
            src={url}
            alt={`milestone-${id}`}
            layout="fill"
            objectFit="cover"
          />
        )}
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('gray.600', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

export default Milestones;
