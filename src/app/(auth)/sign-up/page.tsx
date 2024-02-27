import AuthForm from "@/components/auth/auth-form";
import { FC } from "react";

interface SignUpPageProps {}

const SignUpPage: FC<SignUpPageProps> = ({}) => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-white text-black">
      <AuthForm authType="sign-up" />
    </div>
  );
};

export default SignUpPage;
