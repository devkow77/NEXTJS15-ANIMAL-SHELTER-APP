import { Container } from "@/components/shared/index";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Animal {
  img: string;
  alt: string;
  name: string;
  age: string;
  days: string;
}

const animals: Animal[] = [
  {
    img: "/dog2.jpg",
    alt: "Brown dog named Brutus",
    name: "Brutus",
    age: "3 Years 2 Months",
    days: "102",
  },
  {
    img: "/cat2.jpg",
    alt: "Grey cat named Burek",
    name: "Burek",
    age: "4 Years 6 Months",
    days: "203",
  },
  {
    img: "/rabbit2.jpg",
    alt: "White rabbit named Skoczek",
    name: "Skoczek",
    age: "1 Years 0 Months",
    days: "70",
  },
  {
    img: "/dog3.jpg",
    alt: "Black and white dog named Charlie",
    name: "Charlie",
    age: "4 Years 8 Months",
    days: "210",
  },
  {
    img: "/cat3.jpg",
    alt: "Orange tabby cat named Felix",
    name: "Felix",
    age: "2 Years 3 Months",
    days: "124",
  },
];

const Animals = () => {
  return (
    <section
      className="bg-black/3 from-neutral-950 via-green-950 to-neutral-950 py-12 dark:bg-gradient-to-b"
      aria-labelledby="animals-title"
    >
      <Container className="space-y-6">
        <header className="space-y-2">
          <h2 id="animals-title" className="text-2xl font-black lg:text-3xl">
            They Are Waiting the Most Time
          </h2>
          <p className="text-sm leading-6 md:text-base md:leading-8 dark:opacity-80">
            Among our residents are animals who, despite their gentle hearts and
            loyal eyes, are still waiting for a forever home.
          </p>
          <p className="text-sm font-semibold md:text-base">
            Click on card to show details!
          </p>
        </header>

        <Select>
          <SelectTrigger className="w-[200px] bg-neutral-50">
            <SelectValue placeholder="Select an animal type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Animal Type</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="dogs">Dogs</SelectItem>
              <SelectItem value="cats">Cats</SelectItem>
              <SelectItem value="rabbits">Rabbits</SelectItem>
              <SelectItem value="snakes">Snakes</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="relative grid grid-cols-1 gap-x-3 gap-y-6 overflow-hidden md:grid-cols-3 xl:gap-6">
          {animals.map(({ img, alt, name, age, days }, index) => (
            <article className="space-y-2" key={index}>
              <div className="relative aspect-video rounded-3xl">
                <Image
                  src={img}
                  loading="lazy"
                  alt={alt}
                  width={400}
                  height={400}
                  className="absolute h-full w-full rounded-3xl object-cover object-center dark:opacity-80"
                />
                <div
                  className={`absolute flex h-full w-full cursor-pointer items-end justify-between gap-2 rounded-3xl bg-black/70 p-4 text-white ${index == 0 ? "opacity-100" : "opacity-0"} duration-200 hover:opacity-100`}
                >
                  <div className="text-sm md:text-base">
                    <h3 className="font-bold">{name}</h3>
                    <p>Age: {age}</p>
                    <p>Days in shelter: {days}</p>
                  </div>
                  <Button variant="home">Adopt me</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <Button variant="home">Check All Animals</Button>
      </Container>
    </section>
  );
};

export default Animals;
