import { ReactNode } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import CopyClipboard from "@/components/layouts/blog/copy-clipboard";
import DanialKhakbazMemoji from "@/public/images/memojis/danial-khakbaz-memoji.png";
import { FaArrowLeft, FaRegClock } from "react-icons/fa6";
import { Flex, Button, Text } from "@chakra-ui/react";

type BlogNavProps = {
  date: string;
  neededTime: number;
  children: ReactNode;
};

const BlogNav = async ({ date, neededTime, children }: BlogNavProps) => {
  return (
    <Flex flexDirection="column" gap={4}>
      <Link href="/blog">
        <Button variant="outline" aria-label="back-button">
          <FaArrowLeft />
        </Button>
      </Link>
      {children}
      <Flex
        flexDirection="column"
        border="2px solid #2D2D2D"
        borderRadius={10}
        paddingX={3}
        paddingY={0.5}
        marginY={2}
        gap={4}
      >
        <Flex width="100%" justifyContent="space-between">
          <Flex alignItems="center" gap={2}>
            <Image
              width={50}
              height={50}
              src={DanialKhakbazMemoji}
              alt="Danial Khakbaz's image"
              rel="preload"
              priority
              fetchPriority="high"
              style={{
                border: "2px solid white",
                borderRadius: "100%",
              }}
            />
            <Flex flexDirection="column">
              <Text fontWeight="bold">Danial Khakbaz</Text>
              <Text fontWeight="bold" fontSize={13} color="#56585D">
                {date}
              </Text>
              <Text
                fontSize={13}
                color="#56585D"
                display="inline-flex"
                alignItems="center"
                gap={1}
              >
                <FaRegClock />
                {neededTime} min read
              </Text>
            </Flex>
          </Flex>
          <Flex alignItems="center" gap={2}>
            <CopyClipboard />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BlogNav;
