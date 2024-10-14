"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FadeUp } from "@/components/utils/fade-up";
import {
  Flex,
  Heading,
  Code,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";

const ContactPage = () => {
  const form = useRef<any>(null);

  const toast = useToast();

  const sendEmail = async (e: any) => {
    e.preventDefault();

    console.log(form.current);

    emailjs
      .sendForm("service_jxi8oyf", "template_8ydezxa", form.current, {
        publicKey: "hewZs0hGK_bkmpuex",
      })
      .then(
        () => {
          toast({
            title: "Email sent successfully!",
            status: "success",
            colorScheme: "green",
            duration: 1500,
          });
        },
        (error) => {
          toast({
            title: error.text,
            status: "error",
            colorScheme: "red",
            duration: 1500,
          });
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Flex flexDirection="column" gap={4}>
        <FadeUp>
          <Heading>Contact</Heading>
        </FadeUp>
        <FadeUp>
          <Code
            width="100%"
            backgroundColor="gray"
            textAlign="center"
            borderRadius={8}
            paddingY={4}
          >
            If you want to contact me instantly, Leave a E-mail here!
          </Code>
        </FadeUp>
        <FadeUp>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="from_name" />
          </FormControl>
        </FadeUp>
        <FadeUp>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="user_email" />
            <FormHelperText>I'll never share your email.</FormHelperText>
          </FormControl>
        </FadeUp>
        <FadeUp>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" />
          </FormControl>
        </FadeUp>
        <FadeUp>
          <Button width="100%" colorScheme="yellow" type="submit">
            Send
          </Button>
        </FadeUp>
      </Flex>
    </form>
  );
};

export default ContactPage;
