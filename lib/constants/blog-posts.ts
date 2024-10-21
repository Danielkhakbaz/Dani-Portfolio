import { StaticImageData } from "next/image";
import DeleteDirectoriesOnMac from "@/public/images/blog/delete-directories-on-mac.webp";
import DisableCorsOnChrome from "@/public/images/blog/disable-cors-on-chrome.webp";
import KillProcessOnMac from "@/public/images/blog/kill-processes-on-mac.webp";

type BlogPostsType = {
  link: string;
  title: string;
  date: string;
  image: StaticImageData;
  blurImage: string;
  alt: string;
};

export const blogPosts: BlogPostsType[] = [
  {
    link: "/blog/content/kill-processes-on-mac",
    title: "Kill Process on Mac",
    date: "February 13, 2024",
    image: KillProcessOnMac,
    blurImage:
      "|DSY?bMx?a.8_No#4nR5nOnQoffkRjRjRjt7t7tQ_3x[IUIBDini?bo}X8NFRjoft8%Mt7RjM{M{R%e.xuoztQR*IUs:xH?uofV[a{RjWVaeofjb%zbFRQn+e.s:s:RjM{?vkCRjjZRPWBofkCbFf+j[ofWUkBkCRjoMoL",
    alt: "Kill Process on Mac's Image",
  },
  {
    link: "/blog/content/delete-directories-on-mac",
    title: "Delete Directories on Mac",
    date: "February 09, 2024",
    image: DeleteDirectoriesOnMac,
    blurImage:
      "|iGvtJs7xGt3s6jHR-o#R+??sos8ocnzo0W?ocR.IDbba}aya~fjjsayoLNEX7NdWBW@bHn#WDs+tukVWYWXWskBn$afo0V[WDWUflbHfka#jsa#M*aeofa}a{WCj[j[j?ovoea}a~WCayoLjsj?bWbIa{a#fkfPjuoJju",
    alt: "Delete Directories on Mac's Image",
  },
  {
    link: "/blog/content/disable-cors-on-chrome",
    title: "Disable Cors on Chrome",
    date: "February 11, 2024",
    image: DisableCorsOnChrome,
    blurImage:
      "|HS4NL%QI-$}RqoGslR:t2{bSaxINKs*nmS4s*WFGwTLnNj[X9adjsbIayS|#mNGt6WFbaoJWCov:iROw{NKoxfSWXs+WEGJXUaJs.SiaxoJWrjr+Xv|XAWCnhkDa#jFofKRS*ocn%WXaej?bbWC#QbXkDWBjYj]WWj?a#",
    alt: "Disable Cors on Chrome's Image",
  },
];
