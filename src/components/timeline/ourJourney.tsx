import React from 'react';
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
    url: "HUSH Logo.svg"
  },
  {
    id: 2,
    url: "HUSH Logo.svg"
  },
  {
    id: 3,
    url: "HUSH Logo.svg"
  },
  {
    id: 4,
    url: "HUSH Logo.svg"
  }
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="1100px" p={{ base: 2, sm: 10 }}>
      <Center>
      <VStack maxW={{base:'220px', lg:'340px'}} maxH={{base:'50px', lg:'90px'}} textAlign={'center'} marginBottom={{base: '16', lg:'12'}}>
        <Heading fontWeight="bold" color={'white'}>
          Our Journey
        </Heading>
        <Text color={'whitesmoke'} fontSize={{base:'12px', lg:'sm'}}>
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
  // let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = 'unset';
    rightValue = '-15px';
    // borderWidthValue = '15px 15px 15px 0';
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
  url: string;
}

const ImageCard = ({ id, url }: ImageCardProps) => {
  const isEvenId = id % 2 === 0;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const leftValue = isMobile || !isEvenId ? 'unset' : '-15px';
  const rightValue = isMobile || isEvenId ? '-15px' : 'unset';
  // const borderWidthValue = isMobile || !isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';

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
        w={{base:'290px', lg:'400px'}}
        h={{base: '150px', lg:'300px'}}
        backgroundImage={url}
        bgColor={'white'}
        backgroundSize="cover"
        backgroundPosition="center"
        rounded="lg"
      />
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
