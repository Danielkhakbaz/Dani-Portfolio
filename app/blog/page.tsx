import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Flex } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Danial Khakbaz | Blog",
  description:
    "Read all my thoughts about technologies and programming in general.",
};

const BlogPage = async () => {
  return (
    <Flex flexDirection="column" gap={4}>
      <Link href="/blog/content/delete-directories-on-mac">
        Delete Directories on Mac
      </Link>
      <Link href="/blog/content/disable-cors-on-chrome">
        Disable Cors on Chrome
      </Link>
      <Link href="/blog/content/kill-processes-on-mac">
        Kill Process on Mac
      </Link>
    </Flex>
  );
};

export default BlogPage;
