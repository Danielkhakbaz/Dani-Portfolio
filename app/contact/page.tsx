import dynamic from "next/dynamic";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth/auth-options";

const Authenticated = dynamic(
  () => import("@/components/layouts/contact/authenticated")
);
const Unauthenticated = dynamic(
  () => import("@/components/layouts/contact/un-authenticated")
);

const ContactPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <Authenticated
        // image={session.user!.image!}
        // user={session.user!.name!}
        />
      ) : (
        <Unauthenticated />
      )}
    </>
  );
};

export default ContactPage;
