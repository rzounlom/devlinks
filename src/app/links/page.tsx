import * as actions from "@/actions";

import { FC } from "react";
import FormButton from "@/components/common/form-button";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

interface LinksPageProps {}

const LinksPage: FC<LinksPageProps> = async ({}) => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div>
      LinksPage
      <form action={actions.signOut}>
        <FormButton>Sign Out</FormButton>
      </form>
    </div>
  );
};

export default LinksPage;
