import React from "react";
import { Container } from "@/components/shared/index";
import { GoogleMap, FooterContent } from "@/components/index";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer>
      <Container>
        <GoogleMap
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!}
          lat={50.0413}
          lng={21.999}
          zoom={15}
        />
        <BeConnected />
        <FooterContent />
      </Container>
    </footer>
  );
};

export const BeConnected = () => {
  return (
    <section className="my-12 flex flex-wrap items-center justify-between gap-4">
      <h3 className="text-sm font-medium md:text-base">
        Be <span className="font-bold">connected</span> with us by newsletter
      </h3>
      <form className="flex gap-4">
        <Input type="email" placeholder="Email" />
        <Button type="submit" variant="home">
          Subscribe
        </Button>
      </form>
    </section>
  );
};

export default Footer;
