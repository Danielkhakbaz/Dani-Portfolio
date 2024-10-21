"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FadeUp } from "@/components/utils/fade-up";
import { MOTION_COMPONENT_DELAY } from "@/lib/constants";
import { AnimatePresence } from "framer-motion";
import {
  Flex,
  Heading,
  Code,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Switch,
  Select,
  Button,
  Spinner,
  useToast,
} from "@chakra-ui/react";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [relatedToWork, setRelatedToWork] = useState<"on" | "off">("off");
  const [subjectValue, setSubjectValue] = useState<string>("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const toast = useToast();

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const formData = {
      from_name: nameRef.current!.value,
      user_email: emailRef.current!.value,
      subject: subjectRef.current?.value || "Non-work related",
      message: messageRef.current!.value,
    };

    emailjs
      .send("service_jxi8oyf", "template_8ydezxa", formData, {
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
          relatedToWork === "on" ? setSubjectValue("") : null;
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
      relatedToWork === "off"
        ? nameRef.current?.value.trim() !== "" &&
          emailRef.current?.value.trim() !== "" &&
          messageRef.current?.value.trim() !== ""
        : nameRef.current?.value.trim() !== "" &&
          emailRef.current?.value.trim() !== "" &&
          subjectRef.current?.value.trim() !== "" &&
          messageRef.current?.value.trim() !== "";

    setIsFormValid(isValid);
  };

  return (
    <form onSubmit={sendEmail}>
      <Flex flexDirection="column" gap={4}>
        <FadeUp>
          <Heading>Contact</Heading>
        </FadeUp>
        <FadeUp delay={MOTION_COMPONENT_DELAY / 2}>
          <Code
            width="100%"
            backgroundColor="#999"
            color="#080808"
            textAlign="center"
            borderRadius={8}
            paddingY={4}
          >
            If you want to contact me instantly, Leave a E-mail here!
          </Code>
        </FadeUp>
        <FadeUp delay={MOTION_COMPONENT_DELAY}>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="related_to_work" marginBottom={0}>
              Related to work
            </FormLabel>
            <Switch
              id="related_to_work"
              value={relatedToWork}
              colorScheme="yellow"
              onChange={() =>
                setRelatedToWork((prevRelatedToWork) =>
                  prevRelatedToWork === "off" ? "on" : "off"
                )
              }
            />
          </FormControl>
        </FadeUp>
        <FadeUp delay={MOTION_COMPONENT_DELAY}>
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
        <FadeUp delay={MOTION_COMPONENT_DELAY}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="user_email"
              ref={emailRef}
              onChange={checkFormValidity}
            />
            <FormHelperText color="#CBD5D9">
              I'll never share your email.
            </FormHelperText>
          </FormControl>
        </FadeUp>
        <AnimatePresence mode="sync">
          {relatedToWork === "on" && (
            <FadeUp duration={MOTION_COMPONENT_DELAY / 2}>
              <FormControl>
                <FormLabel>Subject</FormLabel>
                <Input
                  as={Select}
                  type="text"
                  name="subject"
                  ref={subjectRef}
                  value={subjectValue}
                  onChange={(e) => {
                    checkFormValidity();

                    setSubjectValue(e.target.value);
                  }}
                >
                  <option value="">Select object...</option>
                  <option value="Work Opportunity">Work Opportunity</option>
                  <option value="Projects that I'd loved to discuss about">
                    Projects that I'd loved to discuss about
                  </option>
                  <option value="Others">Others</option>
                </Input>
              </FormControl>
            </FadeUp>
          )}
        </AnimatePresence>
        <FadeUp delay={MOTION_COMPONENT_DELAY}>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              ref={messageRef}
              onChange={checkFormValidity}
            />
          </FormControl>
        </FadeUp>
        <FadeUp delay={MOTION_COMPONENT_DELAY}>
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

export default ContactPage;
