import { Container } from "@/components/shared/index";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Animal {
  alt: string;
  src: string;
}

const animals: Animal[] = [
  { alt: "A friendly brown dog", src: "/dog.jpg" },
  { alt: "A curious grey cat", src: "/cat.jpg" },
  { alt: "A white rabbit with long ears", src: "/rabbit.jpg" },
  { alt: "A green snake coiled on a branch", src: "/snake.jpg" },
];

const Header = () => {
  return (
    <header
      className="from-neutral-950 to-green-950 pb-16 lg:pb-32 dark:bg-gradient-to-b"
      aria-labelledby="page-title"
    >
      <Container className="flex flex-col gap-10 sm:flex-row sm:gap-6">
        <div className="space-y-3 sm:w-1/2 lg:space-y-6">
          <h1
            id="page-title"
            className="text-3xl font-black md:text-4xl lg:text-5xl"
          >
            Your New <span className="text-green-600">Best Friend</span> Is
            Waiting
          </h1>
          <p className="text-sm leading-6 md:text-base md:leading-8 dark:opacity-80">
            Every day, countless animals wait in shelters for a second chance.
            Whether you seek a playful pup or a gentle cat, adoption begins a
            beautiful bond. Open your heart — and let your life be changed too.
          </p>
          <Button variant="home">
            <Link href="/animals">Meet the Animals 🐱</Link>
          </Button>
        </div>

        <div
          className="grid aspect-square grid-cols-2 gap-3 rounded-2xl sm:w-1/2 lg:gap-6"
          aria-label="Animals available for adoption"
        >
          {animals.map((animal) => (
            <figure
              key={animal.alt}
              className="relative rounded-full bg-neutral-800"
            >
              <Image
                alt={animal.alt}
                width={400}
                height={400}
                src={animal.src}
                className="absolute h-full w-full rounded-full object-cover object-center"
              />
            </figure>
          ))}
        </div>
      </Container>
    </header>
  );
};

export default Header;
