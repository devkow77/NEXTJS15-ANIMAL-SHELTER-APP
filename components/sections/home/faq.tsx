import React from "react";
import { Container } from "@/components/shared/index";
import { FaqAccordion } from "@/components/index";

const Faq = () => {
  return (
    <section className="py-12 dark:bg-zinc-900" aria-labelledby="faq-title">
      <Container className="space-y-6">
        <h2 id="faq-title" className="text-2xl font-black lg:text-3xl">
          The Most Popular Questions
        </h2>
        <FaqAccordion type="short" />
      </Container>
    </section>
  );
};

export default Faq;
