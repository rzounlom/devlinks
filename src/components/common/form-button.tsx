"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { FC, ReactNode } from "react";

import { useFormStatus } from "react-dom";

interface FormButtonProps extends ButtonProps {
  children: ReactNode;
  login?: boolean;
}

const FormButton: FC<FormButtonProps> = ({
  children,
  color,
  variant,
  login,
  endContent,
  startContent,
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className={`w-full ${login ? "bg-white text-black" : ""}`}
      type="submit"
      color={`${color ? color : "default"}`}
      variant={`${variant ? variant : "solid"}`}
      isLoading={pending}
      startContent={startContent}
      endContent={endContent}
    >
      {pending ? "Loading..." : children}
    </Button>
  );
};

export default FormButton;
