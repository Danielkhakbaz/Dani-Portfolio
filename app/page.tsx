import ImagesGrid from "@/components/layouts/home/images-grid";
import FavQuote from "@/components/layouts/home/fav-quote";
import Summary from "@/components/layouts/home/summary";
import About from "@/components/layouts/home/about";
import Bio from "@/components/layouts/home/bio";
import MainTechs from "@/components/layouts/home/main-techs";
import Interests from "@/components/layouts/home/interests";
import Education from "@/components/layouts/home/education";
import Socials from "@/components/layouts/home/socials";
import { Flex } from "@chakra-ui/react";

const HomePage = async () => {
  return (
    <Flex flexDirection="column" gap={6}>
      <ImagesGrid />
      <FavQuote />
      <Summary />
      <About />
      <Bio />
      <MainTechs />
      <Interests />
      <Education />
      <Socials />
    </Flex>
  );
};

export default HomePage;
