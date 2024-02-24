import AuthForm from "@/components/auth/auth-form";
import { FC } from "react";

interface SignInPageProps {}

const SignInPage: FC<SignInPageProps> = ({}) => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-white text-black">
      <AuthForm authType="sign-in" />
    </div>
  );
};

export default SignInPage;
