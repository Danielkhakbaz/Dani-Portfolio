import { ReactNode } from "react";
import type { Metadata } from "next";
import Navbar from "@/shared/components/navbar";
import Footer from "@/shared/components/footer";
import ScrollToTop from "@/shared/components/scroll-to-top";
import Availability from "@/shared/components/availability";
import { ChakraProvider } from "@/shared/providers/chakra";
import { LatoFont } from "@/shared/styles/fonts";
import { ViewTransitions } from "next-view-transitions";
import { Container } from "@chakra-ui/react";
import "@/shared/styles/globals.css";

export const metadata: Metadata = {
  title: "Danial Khakbaz",
  description:
    "Welcome to Danial's portfolio, where creativity meets innovation in every pixel.",
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "twitter:title": "Danial's Portfolio",
    "twitter:description":
      "Welcome to Danial's portfolio, where creativity meets innovation in every pixel.",
    "twitter:url": "https://danieloo.vercel.app/",
    "twitter:domain": "danieloo.vercel.app",
    "twitter:image": "https://danieloo.vercel.app/logos/dk-cover.jpeg",
    "twitter:card": "summary_large_image",
    "og:title": "Danial's Portfolio",
    "og:description":
      "Welcome to Danial's portfolio, where creativity meets innovation in every pixel.",
    "og:url": "https://danieloo.vercel.app/",
    "og:image": "https://danieloo.vercel.app/logos/dk-cover.jpeg",
    "og:type": "website",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={LatoFont.className}>
          <ChakraProvider>
            <Navbar />
            <Container maxWidth="container.sm" minHeight="80vh" paddingY={6}>
              {children}
            </Container>
            <Footer />
            <ScrollToTop />
            <Availability />
          </ChakraProvider>
        </body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
