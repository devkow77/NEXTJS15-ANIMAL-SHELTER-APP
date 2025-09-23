import React from "react";
import { Container } from "@/components/shared/index";
import {
  DesktopMenu,
  Profile,
  ThemeToggler,
  Hamburger,
} from "@/components/index";
import { Button } from "../ui/button";
import { auth } from "@/app/auth";
import Link from "next/link";
import { Session } from "next-auth";

const Navbar = async () => {
  const session = await auth();
  console.log("Session from (navbar):", session);

  return (
    <nav className="mb-8 py-6 md:mb-16">
      <Container className="flex items-center justify-between">
        <Logo />
        <DesktopMenu />
        <Functionalities session={session} />
      </Container>
    </nav>
  );
};

const Logo = () => <h1 className="font-semibold">Ani🐈al 🐍helter</h1>;

const Functionalities = ({ session }: { session: Session | null }) => {
  "use client";

  return (
    <div className="flex items-center sm:gap-2">
      <Button variant="home" className="hidden md:block">
        <Link href="/profile/donate">Donate us 🪙</Link>
      </Button>
      <Profile session={session} />
      <ThemeToggler />
      <Hamburger />
    </div>
  );
};

export default Navbar;
