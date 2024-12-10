import { ReactNode } from "react";
import ImagesGrid from "@/features/home/components/images-grid";
import FavQuote from "@/features/home/components/fav-quote";
import Summary from "@/features/home/components/summary";
import About from "@/features/home/components/about";
import Bio from "@/features/home/components/bio";
import MainTechs from "@/features/home/components/main-techs";
import Interests from "@/features/home/components/interests";
import Education from "@/features/home/components/education";
import Socials from "@/features/home/components/socials";
import { FadeUp } from "@/shared/utils/fade-up";
import { MOTION_COMPONENT_DELAY } from "@/shared/constants";
import { Flex } from "@chakra-ui/react";

type HomePageItemsType = {
  id: number;
  component: ReactNode;
};

const HomePageItems: HomePageItemsType[] = [
  { id: 1, component: <ImagesGrid /> },
  { id: 2, component: <FavQuote /> },
  { id: 3, component: <Summary /> },
  { id: 4, component: <About /> },
  { id: 5, component: <Bio /> },
  { id: 6, component: <MainTechs /> },
  { id: 7, component: <Interests /> },
  { id: 8, component: <Education /> },
  { id: 9, component: <Socials /> },
];

const HomePage = async () => {
  return (
    <Flex flexDirection="column" gap={6}>
      {HomePageItems.map(({ id, component }) => (
        <FadeUp key={id} delay={MOTION_COMPONENT_DELAY}>
          {component}
        </FadeUp>
      ))}
    </Flex>
  );
};

export default HomePage;
