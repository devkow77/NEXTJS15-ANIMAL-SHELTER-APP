"use server";

import { signIn, signOut } from "@/app/auth";

const signInByGithub = async () => {
  await signIn("github", { redirectTo: "/" });
};

const signInByGoogle = async () => {
  await signIn("google", { redirectTo: "/" });
};

const signOutAccount = async () => {
  await signOut({ redirectTo: "/" });
};

export { signInByGithub, signInByGoogle, signOutAccount };
