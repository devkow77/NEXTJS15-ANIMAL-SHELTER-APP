import {
  Header,
  Adopt,
  Animals,
  Youtube,
  Faq,
} from "@/components/sections/home";

export default function Home() {
  return (
    <div className="md:space-y-32">
      <div>
        <Header />
        <Adopt />
      </div>
      <Animals />
      <Youtube />
      <Faq />
    </div>
  );
}
