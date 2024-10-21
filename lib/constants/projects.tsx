import { ReactElement } from "react";
import { Link, Flex, Badge } from "@chakra-ui/react";
import { poweredBy } from "@/lib/constants/powered-by";
import { stacks } from "@/lib/constants/stacks";
import { FaRightFromBracket } from "react-icons/fa6";

export type ProjectsType = {
  title: string;
  description: string;
  images: {
    src: string;
    blurImage: string;
    alt: string;
  }[];
  blurImage: string;
  poweredBy: {
    label: string;
    icon: ReactElement;
    backgroundColor: string;
  };
  sections: {
    label: string;
    component: ReactElement;
    divider?: boolean;
  }[];
};

export const projects: ProjectsType[] = [
  {
    title: "Danial's Portfolio",
    description: "What can I say? This is just my portfolio.",
    images: [
      {
        src: "/images/projects/portfolio/light-house.png",
        blurImage:
          "|24e=z$*QAs..6xGtismrFImxZ-WxajEsns.n$r@l@xZy.xHv*oIn6s.ti#ZxaS]niw}xasCe.bEFpo1,wt7SJaLocoer]%foLMyj@tQjZaxoee:t7fkWBRjWBozofRjWBIoRjt8ogR*NGR%t7og%MWCInNGbIozf+RjR*",
        alt: "The lighthouse test's result for the danial's portfolio website",
      },
      {
        src: "/images/projects/portfolio/screen-shot.png",
        blurImage:
          "|56a;oob00WZ?wROV=%NkE?wj?9EbJ%hRiM_x]t8E1j]%MadRkkCjXWWkC4.bI?be-IUozs:M{WVIUax%LofM{WBozo0WAxYjsS5a}V?j[tSadV?Z}oMksRiV=t8o#ROW98^a#.9j;ROohR.ROobMxWBtSt6adWYWERij?",
        alt: "The screenshot of the danial's portfolio website",
      },
    ],
    blurImage:
      "|56a;oob00WZ?wROV=%NkE?wj?9EbJ%hRiM_x]t8E1j]%MadRkkCjXWWkC4.bI?be-IUozs:M{WVIUax%LofM{WBozo0WAxYjsS5a}V?j[tSadV?Z}oMksRiV=t8o#ROW98^a#.9j;ROohR.ROobMxWBtSt6adWYWERij?",
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
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
    images: [
      {
        src: "/images/projects/notes-app/light-house.png",
        blurImage:
          "|24e=z$*QAs..6xGtismrFImxZ-WxajEsns.n$r@l@xZy.xHv*oIn6s.ti#ZxaS]niw}xasCe.bEFpo1,wt7SJaLocoer]%foLMyj@tQjZaxoee:t7fkWBRjWBozofRjWBIoRjt8ogR*NGR%t7og%MWCInNGbIozf+RjR*",
        alt: "The lighthouse test's result for the notes-app website",
      },
      {
        src: "/images/projects/notes-app/screen-shot.png",
        blurImage:
          "|RT92^nzcIogbco#kDogo$Q*jEXVj]bdbJkDa}ohR*j]V=jsbdaxkEayj=k]ohVpjYa~acj]axjXXqohW9jYW9ade-axjYp0oMW?jbW9f6acayjbbynhWBj]WAj^ada#jZtUnhV=j]axkDf6a$jYkYn$WAjuaej]f5a}jZ",
        alt: "The screenshot of the notes-app website",
      },
    ],
    blurImage:
      "|RT92^nzcIogbco#kDogo$Q*jEXVj]bdbJkDa}ohR*j]V=jsbdaxkEayj=k]ohVpjYa~acj]axjXXqohW9jYW9ade-axjYp0oMW?jbW9f6acayjbbynhWBj]WAj^ada#jZtUnhV=j]axkDf6a$jYkYn$WAjuaej]f5a}jZ",
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
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
    images: [
      {
        src: "/images/projects/the-film-inventory/light-house.png",
        blurImage:
          "|24e=z$*QAs..6xGtismrFImxZ-WxajEsns.n$r@l@xZy.xHv*oIn6s.ti#ZxaS]niw}xasCe.bEFpo1,wt7SJaLocoer]%foLMyj@tQjZaxoee:t7fkWBRjWBozofRjWBIoRjt8ogR*NGR%t7og%MWCInNGbIozf+RjR*",
        alt: "The lighthouse test's result for the the film inventory website",
      },
      {
        src: "/images/projects/the-film-inventory/screen-shot.png",
        blurImage:
          "|wLXVzoe?bay?bkC-;j]xuM{WVofj[off6f6jsj[~qj[M{ayM{a#Rja}R*%MWVWBj[WBjZWAj?ayxtoeWBayWCazfkazay?bWCM{j[Rjj[Rjj?WBM{oeofayofayofazj[x]WCWBj[WBj[WBj[ayRjj[j[ayj[ayj[a}j[",
        alt: "The screenshot of the the film inventory website",
      },
    ],
    blurImage:
      "|wLXVzoe?bay?bkC-;j]xuM{WVofj[off6f6jsj[~qj[M{ayM{a#Rja}R*%MWVWBj[WBjZWAj?ayxtoeWBayWCazfkazay?bWCM{j[Rjj[Rjj?WBM{oeofayofayofazj[x]WCWBj[WBj[WBj[ayRjj[j[ayj[ayj[a}j[",
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
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
    images: [
      {
        src: "/images/projects/links/light-house.png",
        blurImage:
          "|24e=z$*QAs..6xGtismrFImxZ-WxajEsns.n$r@l@xZy.xHv*oIn6s.ti#ZxaS]niw}xasCe.bEFpo1,wt7SJaLocoer]%foLMyj@tQjZaxoee:t7fkWBRjWBozofRjWBIoRjt8ogR*NGR%t7og%MWCInNGbIozf+RjR*",
        alt: "The lighthouse test's result for the danial's links website",
      },
      {
        src: "/images/projects/links/screen-shot.png",
        blurImage:
          "|24xrXt800WBItMvnLtS.A?bfkIVaxadj]bJadt6DhRio~ofxaxvbxV?RN-;jYM_bIbcWVf4ogozV?s:t9WBR$R*WZj=n#NLbIobjbn-jEjXj]WZOZShjEoKt7r;nMf,T0ISn$xva{bDbcXAadV=v|nhX8W=WFT0XTjErq",
        alt: "The screenshot of the danial's links website",
      },
    ],
    blurImage:
      "|24xrXt800WBItMvnLtS.A?bfkIVaxadj]bJadt6DhRio~ofxaxvbxV?RN-;jYM_bIbcWVf4ogozV?s:t9WBR$R*WZj=n#NLbIobjbn-jEjXj]WZOZShjEoKt7r;nMf,T0ISn$xva{bDbcXAadV=v|nhX8W=WFT0XTjErq",
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
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
    images: [
      {
        src: "/images/projects/software-agency-website/light-house.png",
        blurImage:
          "|24e=z$*QAs..6xGtismrFImxZ-WxajEsns.n$r@l@xZy.xHv*oIn6s.ti#ZxaS]niw}xasCe.bEFpo1,wt7SJaLocoer]%foLMyj@tQjZaxoee:t7fkWBRjWBozofRjWBIoRjt8ogR*NGR%t7og%MWCInNGbIozf+RjR*",
        alt: "The lighthouse test's result for the margelo website",
      },
      {
        src: "/images/projects/software-agency-website/screen-shot.png",
        blurImage:
          "|ZLC@|NxTLnit7s:nhn~bI?]OYW=jEofsln$j[bHS}SiWAaJo#ofj?flf6o#W=WBaykCjYbHa|jYkWbHV@WqbbaebIfljZocjsa}bIbHaybHjYayjYfPflbIWBaxfljsazoffkaya}azayj[j[a}kCfkaxa|fkjZf7j[fk",
        alt: "The screenshot of the margelo website",
      },
    ],
    blurImage:
      "|ZLC@|NxTLnit7s:nhn~bI?]OYW=jEofsln$j[bHS}SiWAaJo#ofj?flf6o#W=WBaykCjYbHa|jYkWbHV@WqbbaebIfljZocjsa}bIbHaybHjYayjYfPflbIWBaxfljsazoffkaya}azayj[j[a}kCfkaxa|fkjZf7j[fk",
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
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
    images: [
      {
        src: "/images/projects/use-shared/screen-shot.png",
        blurImage:
          "|8SidIIT?H~q-=IU9Gt8?bQ-t5M{t7WBWBt8M{of-A%M9F4.M{?b?baxIUwzxuM|RjRjWAoJWUf68_Rj%N-;s:D%D%WA%MrXV?t7oyogWBRkt7of-As+axIUWDxut8j]M{-BROofNGozxut7t7Rj$iM{ogaxt7ofWAt7Rj",
        alt: "1",
      },
    ],
    blurImage:
      "|8SidIIT?H~q-=IU9Gt8?bQ-t5M{t7WBWBt8M{of-A%M9F4.M{?b?baxIUwzxuM|RjRjWAoJWUf68_Rj%N-;s:D%D%WA%MrXV?t7oyogWBRkt7of-As+axIUWDxut8j]M{-BROofNGozxut7t7Rj$iM{ogaxt7ofWAt7Rj",
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
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
    images: [
      {
        src: "/images/projects/emoji-todo/screen-shot.png",
        blurImage:
          "|7S?Gdt6~pxvIVt6M{t7%M%LWCa#t6fkWBjYWVbIofjsWBbIs:axR+oeoe%MWWazoef7WCj?WWa#ofj?WBa}ofayWCoeoL%Mayayoea}WVj?aza#ofjsWBa}ofayWCj[oL%Mayayoej[ayjsaya}j[f6WCflofaxWBj[j[",
        alt: "1",
      },
    ],
    blurImage:
      "|7S?Gdt6~pxvIVt6M{t7%M%LWCa#t6fkWBjYWVbIofjsWBbIs:axR+oeoe%MWWazoef7WCj?WWa#ofj?WBa}ofayWCoeoL%Mayayoea}WVj?aza#ofjsWBa}ofayWCj[oL%Mayayoej[ayjsaya}j[f6WCflofaxWBj[j[",
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
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
