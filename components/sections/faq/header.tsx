import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Container } from "@/components/shared/index";

const Header = () => {
  return (
    <header>
      <Container className="flex flex-col gap-10 sm:flex-row sm:gap-6">
        <section className="space-y-3 sm:w-1/2 lg:space-y-6">
          <h1 className="text-3xl font-black md:text-4xl lg:text-5xl">
            Frequently <span className="text-red-600">Asked Questions</span>
          </h1>
          <p className="text-sm leading-6 md:text-base md:leading-8 dark:opacity-80">
            Our team is often asked how to adopt a pet, become a volunteer, or
            support our work. The adoption process begins by filling out a form
            on our website or contacting our team directly. We then schedule a
            meeting to get to know you and ensure the best match for both you
            and the pet. If you’d like to volunteer, we’re always looking for
            passionate people to help care for animals, assist at events, or
            support our educational programs—you can apply through the volunteer
            form on our site.
          </p>
          <Link href="#faq">
            <Button variant="faq">Check all below</Button>
          </Link>
        </section>
        <section className="grid aspect-square grid-cols-2 grid-rows-3 gap-6 rounded-2xl sm:w-1/2">
          <div className="relative col-span-2 row-span-2 rounded-2xl bg-neutral-800">
            <Image
              alt="pet"
              width={800}
              height={600}
              src="/faq1.jpg"
              className="absolute h-full w-full rounded-2xl object-cover object-center"
            />
          </div>
        </section>
      </Container>
    </header>
  );
};

export default Header;
