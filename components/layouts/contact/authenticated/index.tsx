"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FadeUp } from "@/components/utils/fade-up";
import {
  Flex,
  Heading,
  Code,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Spinner,
  useToast,
} from "@chakra-ui/react";

const Authenticated = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const toast = useToast();

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm("service_jxi8oyf", "template_8ydezxa", formRef.current!, {
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

          nameRef.current!.value = "";
          emailRef.current!.value = "";
          messageRef.current!.value = "";

          setIsFormValid(false);
        },
        (error) => {
          toast({
            title: error.text,
            status: "error",
            colorScheme: "red",
            duration: 1500,
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const checkFormValidity = () => {
    const isValid =
      nameRef.current?.value.trim() !== "" &&
      emailRef.current?.value.trim() !== "" &&
      messageRef.current?.value.trim() !== "";

    setIsFormValid(isValid);
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
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
            <Input
              type="text"
              name="from_name"
              ref={nameRef}
              onChange={checkFormValidity}
            />
          </FormControl>
        </FadeUp>
        <FadeUp>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="user_email"
              ref={emailRef}
              onChange={checkFormValidity}
            />
            <FormHelperText>I'll never share your email.</FormHelperText>
          </FormControl>
        </FadeUp>
        <FadeUp>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              ref={messageRef}
              onChange={checkFormValidity}
            />
          </FormControl>
        </FadeUp>
        <FadeUp>
          <Button
            width="100%"
            colorScheme="yellow"
            type="submit"
            isDisabled={isLoading || !isFormValid}
          >
            {!isLoading ? "Send" : <Spinner />}
          </Button>
        </FadeUp>
      </Flex>
    </form>
  );
};

export default Authenticated;
