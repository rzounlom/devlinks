"use server";

import { db } from "@/db";

export const findUsers = async () => {
  try {
    const users = await db.user.findMany();
    console.log(users);
  } catch (error) {
    console.log({ error });
  }
};
