import { Container } from "@/components/shared/index";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Choose an Animal 🐶",
    description:
      "Browse available animals and pick the one you'd like to adopt.",
  },
  {
    number: 2,
    title: "Fill Out the Form 📝",
    description:
      "Complete the adoption form with your personal details and preferences.",
  },
  {
    number: 3,
    title: "Initial Interview 🗨️",
    description:
      "We'll contact you to discuss your living situation and expectations.",
  },
  {
    number: 4,
    title: "Pre-Adoption Visit 🏚️",
    description:
      "An optional home visit to ensure everything is ready for your new pet.",
  },
  {
    number: 5,
    title: "Sign the Agreement ✍️",
    description:
      "Sign the adoption contract and bring your new companion home!",
  },
];

const Adopt = () => {
  return (
    <section
      className="from-green-950 to-neutral-950 dark:bg-gradient-to-b"
      aria-labelledby="adopt-title"
    >
      <Container className="space-y-12">
        <h2
          id="adopt-title"
          className="text-center text-2xl font-black md:text-3xl"
        >
          How to Adopt a Pet?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {steps.map(({ number, title, description }: Step) => (
            <article
              key={number}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white shadow-lg">
                {number}
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm leading-6 md:text-base md:leading-8 dark:opacity-80">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Adopt;
