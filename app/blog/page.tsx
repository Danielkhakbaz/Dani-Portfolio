import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import BlogCard from "@/components/layouts/blog/card";
import { MotionOpacity } from "@/components/utils/motion/opacity";
import { blogPosts } from "@/lib/constants/blog-posts";
import { Flex, Heading, Grid, GridItem } from "@chakra-ui/react";
import moment from "moment";

export const metadata: Metadata = {
  title: "Danial Khakbaz | Blog",
  description:
    "Read all my thoughts about technologies and programming in general.",
};

const MOTION_COMPONENT_DELAY = 0.25;

const sortedBlogPosts = blogPosts.sort((a, b) => {
  return (
    moment(a.date, "MMMM DD, YYYY").toDate().getTime() -
    moment(b.date, "MMMM DD, YYYY").toDate().getTime()
  );
});

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
        {sortedBlogPosts.map(({ link, title, date, image, alt }, index) => (
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
