import { Link as NextLink } from "next-view-transitions";
import { Link, Flex, Badge } from "@chakra-ui/react";
import { poweredBy } from "@/lib/constants/powered-by";
import { stacks } from "@/lib/constants/stacks";
import { ProjectsType } from "@/types/projects";
import { FaRightFromBracket } from "react-icons/fa6";

export const projects: ProjectsType[] = [
  {
    title: "Danial's Portfolio",
    description: "What can I say? This is just my portfolio.",
    icon: 1,
    images: [
      {
        src: "/images/projects/portfolio/light-house.png",
        alt: "The lighthouse test's result for the danial's portfolio website",
      },
      {
        src: "/images/projects/portfolio/screen-shot.png",
        alt: "The screenshot of the danial's portfolio website",
      },
    ],
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://danieloo.vercel.app"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://danieloo.com
          </Link>
        ),
        divider: true,
      },
      {
        label: "Github",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://github.com/Danielkhakbaz/Danial-Portfolio"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            Github
            <FaRightFromBracket />
          </Link>
        ),
        divider: true,
      },
      {
        label: "Stacks",
        component: (
          <Flex width="100%" flexWrap="wrap" gap={4}>
            {[
              stacks.next,
              stacks.typescript,
              stacks.chakra,
              stacks.framer,
              stacks.drizzle,
            ].map(({ icon, label, backgroundColor, color }) => (
              <Badge
                key={label}
                display="inline-flex"
                alignItems="center"
                gap={2}
                variant="subtle"
                backgroundColor={backgroundColor}
                color={color}
                fontSize="12px"
                textTransform="none"
              >
                {icon}
                {label}
              </Badge>
            ))}
          </Flex>
        ),
      },
    ],
  },
  {
    title: "Notes App",
    description:
      "a Note-app using LocalStorage API, so your data will never be removed unless you choose to remove it.",
    icon: 1,
    images: [
      {
        src: "/images/projects/notes-app/light-house.png",
        alt: "The lighthouse test's result for the notes-app website",
      },
      {
        src: "/images/projects/notes-app/screen-shot.png",
        alt: "The screenshot of the notes-app website",
      },
    ],
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://danial-notes-app.vercel.app"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://danial-notes-app.com
          </Link>
        ),
        divider: true,
      },
      {
        label: "Github",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://github.com/Danielkhakbaz/Notes-App"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            Github
            <FaRightFromBracket />
          </Link>
        ),
        divider: true,
      },
      {
        label: "Stacks",
        component: (
          <Flex width="100%" flexWrap="wrap" gap={4}>
            {[
              stacks.next,
              stacks.javascript,
              stacks.tailwind,
              stacks.daisyui,
            ].map(({ icon, label, backgroundColor, color }) => (
              <Badge
                key={label}
                display="inline-flex"
                alignItems="center"
                gap={2}
                variant="subtle"
                backgroundColor={backgroundColor}
                color={color}
                fontSize="12px"
                textTransform="none"
              >
                {icon}
                {label}
              </Badge>
            ))}
          </Flex>
        ),
      },
    ],
  },
  {
    title: "The Film Inventory",
    description: "a Inventory of a lot of animes from all across the globe.",
    icon: 1,
    images: [
      {
        src: "/images/projects/the-film-inventory/light-house.png",
        alt: "The lighthouse test's result for the the film inventory website",
      },
      {
        src: "/images/projects/the-film-inventory/screen-shot.png",
        alt: "The screenshot of the the film inventory website",
      },
    ],
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://the-film-inventory.vercel.app"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://the-film-inventory.com
          </Link>
        ),
        divider: true,
      },
      {
        label: "Github",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://github.com/Danielkhakbaz/The-Film-Inventory"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            Github
            <FaRightFromBracket />
          </Link>
        ),
        divider: true,
      },
      {
        label: "Stacks",
        component: (
          <Flex width="100%" flexWrap="wrap" gap={4}>
            {[
              stacks.next,
              stacks.typescript,
              stacks.tailwind,
              stacks.daisyui,
              stacks.framer,
              stacks.prisma,
            ].map(({ icon, label, backgroundColor, color }) => (
              <Badge
                key={label}
                display="inline-flex"
                alignItems="center"
                gap={2}
                variant="subtle"
                backgroundColor={backgroundColor}
                color={color}
                fontSize="12px"
                textTransform="none"
              >
                {icon}
                {label}
              </Badge>
            ))}
          </Flex>
        ),
      },
    ],
  },
  {
    title: "Danial's Links",
    description: "Access my links via this website.",
    icon: 1,
    images: [
      {
        src: "/images/projects/links/light-house.png",
        alt: "The lighthouse test's result for the danial's links website",
      },
      {
        src: "/images/projects/links/screen-shot.png",
        alt: "The screenshot of the danial's links website",
      },
    ],
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://danial-links.vercel.app"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://danial-links.com
          </Link>
        ),
        divider: true,
      },
      {
        label: "Github",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://github.com/Danielkhakbaz/links"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            Github
            <FaRightFromBracket />
          </Link>
        ),
        divider: true,
      },
      {
        label: "Stacks",
        component: (
          <Flex width="100%" flexWrap="wrap" gap={4}>
            {[stacks.next, stacks.typescript, stacks.tailwind].map(
              ({ icon, label, backgroundColor, color }) => (
                <Badge
                  key={label}
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  variant="subtle"
                  backgroundColor={backgroundColor}
                  color={color}
                  fontSize="12px"
                  textTransform="none"
                >
                  {icon}
                  {label}
                </Badge>
              )
            )}
          </Flex>
        ),
      },
    ],
  },
  {
    title: "Margelo Software Agency",
    description: "a Clone of a software-agency website named margelo.",
    icon: 1,
    images: [
      {
        src: "/images/projects/software-agency-website/light-house.png",
        alt: "The lighthouse test's result for the margelo website",
      },
      {
        src: "/images/projects/software-agency-website/screen-shot.png",
        alt: "The screenshot of the margelo website",
      },
    ],
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://software-agency-website.vercel.app"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://software-agency-website.com
          </Link>
        ),
        divider: true,
      },
      {
        label: "Github",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://github.com/Danielkhakbaz/Software-Agency-Website"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            Github
            <FaRightFromBracket />
          </Link>
        ),
        divider: true,
      },
      {
        label: "Stacks",
        component: (
          <Flex width="100%" flexWrap="wrap" gap={4}>
            {[stacks.next, stacks.typescript, stacks.tailwind].map(
              ({ icon, label, backgroundColor, color }) => (
                <Badge
                  key={label}
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  variant="subtle"
                  backgroundColor={backgroundColor}
                  color={color}
                  fontSize="12px"
                  textTransform="none"
                >
                  {icon}
                  {label}
                </Badge>
              )
            )}
          </Flex>
        ),
      },
    ],
  },
  {
    title: "Use-shared library",
    description:
      "a Simple react-hook using contextAPI in order to share a state throughout the whole app.",
    icon: 0,
    images: [{ src: "/images/projects/use-shared/screen-shot.png", alt: "1" }],
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://www.npmjs.com/package/@danielkhakbaz/use-shared"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://www.npmjs.com/package/@danielkhakbaz/use-shared
          </Link>
        ),
        divider: true,
      },
      {
        label: "Github",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://github.com/Danielkhakbaz/use-shared"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            Github
            <FaRightFromBracket />
          </Link>
        ),
        divider: true,
      },
      {
        label: "Stacks",
        component: (
          <Flex width="100%" flexWrap="wrap" gap={4}>
            {[stacks.react, stacks.javascript].map(
              ({ icon, label, backgroundColor, color }) => (
                <Badge
                  key={label}
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  variant="subtle"
                  backgroundColor={backgroundColor}
                  color={color}
                  fontSize="12px"
                  textTransform="none"
                >
                  {icon}
                  {label}
                </Badge>
              )
            )}
          </Flex>
        ),
      },
    ],
  },
  {
    title: "Emoji Todo",
    description:
      "Built with the cutting-edge technologies just to show the power of server-actions.",
    icon: 0,
    images: [{ src: "/images/projects/emoji-todo/screen-shot.png", alt: "1" }],
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://github.com/Danielkhakbaz/Emoji-todo"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://github.com/Danielkhakbaz/Emoji-todo
          </Link>
        ),
        divider: true,
      },
      {
        label: "Github",
        component: (
          <Link
            as={NextLink}
            isExternal
            href="https://github.com/Danielkhakbaz/Emoji-todo"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            Github
            <FaRightFromBracket />
          </Link>
        ),
        divider: true,
      },
      {
        label: "Stacks",
        component: (
          <Flex width="100%" flexWrap="wrap" gap={4}>
            {[
              stacks.next,
              stacks.typescript,
              stacks.tailwind,
              stacks.drizzle,
            ].map(({ icon, label, backgroundColor, color }) => (
              <Badge
                key={label}
                display="inline-flex"
                alignItems="center"
                gap={2}
                variant="subtle"
                backgroundColor={backgroundColor}
                color={color}
                fontSize="12px"
                textTransform="none"
              >
                {icon}
                {label}
              </Badge>
            ))}
          </Flex>
        ),
      },
    ],
  },
];
