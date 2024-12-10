import type { Metadata } from "next";
import Contact from "@/features/contact/components";

export const metadata: Metadata = {
  title: "Danial Khakbaz | Contact",
  description: "you can reach to me via this page.",
};

const ContactPage = async () => {
  return <Contact />;
};

export default ContactPage;
