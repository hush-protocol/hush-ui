"use client";
import {
  Box,
  chakra,
  HStack,
  VStack,
  Text,
  useBreakpointValue,
  Flex,
  Center,
  Heading,
} from "@chakra-ui/react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import HackImg from "../../../public/hackathon.jpg";
import productImg from "../../../public/product.jpg";
import whitepaper from "../../../public/whitepaper.jpg";
import prototypeImg from "../../../public/prototype.jpg";
import Image, { StaticImageData } from "next/image";

interface TimelineEntry {
  id: number;
  date: string;
  title: string;
  description: string;
  content: React.ReactNode;
}

const milestones = [
  {
    id: 1,
    date: "November 10, 2023",
    title: "Hackathon Victory",
    description: `Secured the top position at the prestigious Encode Club X ICP:  Zero to DApp Awesome ICP Track.`,
  },
  {
    id: 2,
    date: "December 10, 2023",
    title: "Prototype Development",
    description: `Successfully designed and launched our initial prototype, which demonstrated the core capabilities of secure and decentralized wallet recovery.`,
  },
  {
    id: 3,
    date: "Aug 1, 2024",
    title: "Whitepaper & Landing page",
    description:
      "Published our comprehensive whitepaper and Launched the landing page for user engagement.",
  },
  {
    id: 4,
    date: "December 30, 2024",
    title: "Product Development",
    description:
      "Implementing features such as email / Social Auth signature verification, email recovery, and on-chain encrypted storage.",
  },
];

const milestoneImages = [
  {
    id: 1,
    url: HackImg,
  },
  {
    id: 2,
    url: prototypeImg,
  },
  {
    id: 3,
    url: whitepaper,
  },
  {
    id: 4,
    url: productImg,
  },
];

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
      console.log(height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 0%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="overflow-hidden"
      ref={containerRef}
    >
      <Center>
          <VStack
            maxW={{ base: "290px", lg: "340px" }}
            maxH={{ base: "50px", lg: "90px" }}
            textAlign={"center"}
            marginBottom={{ base: "12", lg: "16" }}
          >
            <Heading fontWeight="bold" color={"white"}>
              Our Journey
            </Heading>
            <Text color={"whitesmoke"} fontSize={{ base: "12px", lg: "sm" }}>
              Hush Protocol is proud of its continuous progress and achievements
              in the field of crypto security.
            </Text>
          </VStack>
        </Center>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {milestones.map((milestone, index) => {
          const image = milestoneImages.find((img) => img.id === milestone.id);
          return (
            <Flex key={milestone.id}>
              {isDesktop && milestone.id % 2 !== 0 && (
                <>
                  <ImageCard {...(image || { id: milestone.id, url: "" })} />
                  <div
                    style={{
                      height: height + "px",
                    }}
                    className="absolute left-1/2 top-0 w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] overflow-hidden"
                  >
                    <motion.div
                      style={{
                        height: heightTransform,
                        opacity: opacityTransform,
                      }}
                      className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                  </div>
                  <Card {...milestone} />
                </>
              )}

              {isDesktop && milestone.id % 2 === 0 && (
                <>
                  <Card {...milestone} />
                  <div
                    style={{
                      height: height + 10 + "px",
                    }}
                    className="absolute left-1/2 top-0 w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[100%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                  >
                    <motion.div
                      style={{
                        height: heightTransform,
                        opacity: opacityTransform,
                      }}
                      className="absolute flex inset-x-0 top-0 w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                  </div>
                  <ImageCard {...(image || { id: milestone.id, url: "" })} />
                </>
              )}

              {isMobile && (
                <>
                  <div
                    style={{
                      height: height + "px",
                    }}
                    className="absolute left-1 top-0 w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                  >
                    <motion.div
                      style={{
                        height: heightTransform,
                        opacity: opacityTransform,
                      }}
                      className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                  </div>
                  <VStack>
                    {image && <ImageCard {...image} />}
                    <Card {...milestone} />
                  </VStack>
                </>
              )}
            </Flex>
          );
        })}
      </div>
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
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "unset";
    rightValue = "-15px";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={"transparent"}
      spacing={5}
      rounded="lg"
      alignItems="center"
    >
      <Box mx={12}>
        <Text fontSize="lg" color={isEvenId ? "teal.400" : "blue.400"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1
            color={"white"}
            fontSize="2xl"
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
          >
            {title}
          </chakra.h1>
          <Text fontSize="md" color={"whitesmoke"}>
            {description}
          </Text>
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
  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={"transparent"}
      rounded="lg"
      alignItems="center"
      pos="relative"
    >
      <Box
        w={{ base: "290px", lg: "400px" }}
        h={{ base: "150px", lg: "300px" }}
        bgColor={"white"}
        rounded="lg"
        mx={12}
        pos="relative"
        overflow="hidden"
      >
        {typeof url === "string" ? (
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
