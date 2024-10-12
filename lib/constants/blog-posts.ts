import { StaticImageData } from "next/image";
import DeleteDirectoriesOnMac from "@/public/images/blog/delete-directories-on-mac.webp";
import DisableCorsOnChrome from "@/public/images/blog/disable-cors-on-chrome.webp";
import KillProcessOnMac from "@/public/images/blog/kill-processes-on-mac.webp";

type BlogPostsType = {
  link: string;
  title: string;
  date: string;
  image: StaticImageData;
  alt: string;
};

export const blogPosts: BlogPostsType[] = [
  {
    link: "/blog/content/kill-processes-on-mac",
    title: "Kill Process on Mac",
    date: "February 13, 2024",
    image: KillProcessOnMac,
    alt: "Kill Process on Mac's Image",
  },
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
];
