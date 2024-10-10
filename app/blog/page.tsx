import type { Metadata } from "next";
import { StaticImageData } from "next/image";
import { Link } from "next-view-transitions";
import BlogCard from "@/components/layouts/blog/card";
import { MotionOpacity } from "@/components/utils/motion/opacity";
import DeleteDirectoriesOnMac from "@/public/images/blog/delete-directories-on-mac.webp";
import DisableCorsOnChrome from "@/public/images/blog/disable-cors-on-chrome.webp";
import KillProcessOnMac from "@/public/images/blog/kill-processes-on-mac.webp";
import { Flex, Heading, Grid, GridItem } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Danial Khakbaz | Blog",
  description:
    "Read all my thoughts about technologies and programming in general.",
};

type BlogPostsType = {
  link: string;
  title: string;
  date: string;
  image: StaticImageData;
  alt: string;
};

const MOTION_COMPONENT_DELAY = 0.25;

const blogPosts: BlogPostsType[] = [
  {
    link: "/blog/content/delete-directories-on-mac",
    title: "Delete Directories on Mac",
    date: "February 09, 2024",
    image: DeleteDirectoriesOnMac,
    alt: "Delete Directories on Mac's Image",
  },
  {
    link: "/blog/content/disable-cors-on-chrome",
    title: "Disable Cors on Chrome",
    date: "February 11, 2024",
    image: DisableCorsOnChrome,
    alt: "Disable Cors on Chrome's Image",
  },
  {
    link: "/blog/content/kill-processes-on-mac",
    title: "Kill Process on Mac",
    date: "February 13, 2024",
    image: KillProcessOnMac,
    alt: "Kill Process on Mac's Image",
  },
];

const BlogPage = async () => {
  return (
    <Flex flexDirection="column" gap={6}>
      <MotionOpacity delay={0.5}>
        <Heading>Blog</Heading>
      </MotionOpacity>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
      >
        {blogPosts.map(({ link, title, date, image, alt }, index) => (
          <MotionOpacity
            key={link}
            delay={MOTION_COMPONENT_DELAY * (index + 1)}
          >
            <GridItem as={Link} href={link}>
              <BlogCard title={title} date={date} image={image} alt={alt} />
            </GridItem>
          </MotionOpacity>
        ))}
      </Grid>
    </Flex>
  );
};

export default BlogPage;
