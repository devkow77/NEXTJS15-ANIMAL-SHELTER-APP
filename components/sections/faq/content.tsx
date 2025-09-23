import React from "react";
import { FaqAccordion } from "@/components/index";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/index";

const Content = () => {
  return (
    <section>
      <Container className="space-y-12">
        <div className="w-full space-y-6">
          <h2 className="text-xl font-black md:text-2xl">
            The Most Popular Questions
          </h2>
          <FaqAccordion type="full" />
        </div>
        <div className="flex items-center gap-6">
          <h2 className="text-base font-bold lg:text-lg">
            Still have questions? Reach out to us!
          </h2>
          <Button variant="faq">
            <Link href="/contact">Contact page</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Content;
