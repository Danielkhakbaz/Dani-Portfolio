// "use server";

// import emailjs from "@emailjs/browser";
// import { useToast } from "@chakra-ui/react";

// const toast = useToast();

// export const sendEmail = async (formData: FormData) => {
//   emailjs
//     .sendForm(
//       "service_jxi8oyf",
//       "template_8ydezxa",
//       {
//         from_name: formData.get("from_name"),
//         user_email: formData.get("user_email"),
//         message: formData.get("message"),
//       },
//       {
//         publicKey: "hewZs0hGK_bkmpuex",
//       }
//     )
//     .then(
//       () => {
//         toast({
//           title: "Email sent successfully!",
//           status: "success",
//           colorScheme: "green",
//           duration: 1500,
//         });
//       },
//       (error) => {
//         toast({
//           title: error.text,
//           status: "error",
//           colorScheme: "red",
//           duration: 1500,
//         });
//       }
//     );
// };
