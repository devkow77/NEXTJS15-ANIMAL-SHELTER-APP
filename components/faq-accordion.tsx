import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  type: "short" | "full";
}

interface Items {
  question: string;
  answer: string;
}

const items: Items[] = [
  {
    question: "Adoption Process",
    answer: `To adopt a pet, simply fill out our online application form. Once
      approved, we’ll schedule a meeting to ensure the right fit between
      you and your new companion. All adopted animals are vaccinated, microchipped, and
      spayed/neutered before going to their new home.`,
  },
  {
    question: "Visiting Hours",
    answer: `Our shelter is open to visitors from Monday to Saturday, 10 AM to 6
      PM. Walk-ins are welcome, but we recommend scheduling an appointment
      for adoptions. Guided tours and group visits can also be arranged in advance.`,
  },
  {
    question: "Donations & Volunteering",
    answer: `We rely heavily on community support. Donations of food, supplies,
      or funds help us care for our animals and improve their quality of
      life. Volunteers are always welcome! Whether it’s walking dogs, cleaning,
      or helping at events, your time makes a big difference.`,
  },
  {
    question: "What Should I Bring When Adopting?",
    answer: `Please bring a valid photo ID and, if renting, proof that pets are
      allowed in your residence. A carrier or leash is also required for
      safe transport. Adoption fees can be paid by card or cash at the time of pickup.`,
  },
  {
    question: "Can I Surrender My Pet?",
    answer: `Yes, we accept surrendered pets by appointment. This allows us to
      evaluate space and prepare accordingly. Please provide any medical records,
      vaccination history, and personal info about your pet to help us rehome them responsibly.`,
  },
  {
    question: "Lost & Found Animals",
    answer: `If you’ve lost a pet, check our lost & found listings and contact
      the shelter with a description and photo. Found animals are held for
      a limited time before becoming adoptable. We also encourage microchipping
      to increase the chances of reuniting pets with their owners.`,
  },
  {
    question: "How Can I Support the Shelter?",
    answer: `There are many ways to support our shelter! You can make a
        monetary donation, sponsor a specific animal, or contribute supplies
        from our wish list. Additionally, spreading the word about our mission
        and events helps us reach more potential adopters and supporters.`,
  },
  {
    question: "Are There Any Special Events?",
    answer: `Yes, we regularly host special events such as adoption fairs,
        fundraising galas, and community outreach programs. These events are
        great opportunities to meet our animals, learn more about our work,
        and get involved. Check our website or social media for upcoming event details.`,
  },
  {
    question: "What Health Care Do You Provide?",
    answer: `All animals in our care receive comprehensive health evaluations
        by our veterinary team. This includes vaccinations, spaying/neutering,
        microchipping, and treatment for any medical conditions. We are committed
        to ensuring that every animal is healthy and ready for adoption.`,
  },
  {
    question: "Can I Foster an Animal?",
    answer: `Absolutely! Fostering is a wonderful way to help animals in need.
        We provide all necessary supplies and veterinary care while the animal
        is in your home. Fostering helps us free up space in the shelter and
        provides valuable socialization for the animals.`,
  },
  {
    question: "Do You Offer Training Resources?",
    answer: `Yes, we offer basic training resources and guidance for new pet
        owners. This includes tips on house training, obedience, and behavior
        management. We also partner with local trainers for more specialized
        training needs.`,
  },
  {
    question: "How Do You Ensure Animal Welfare?",
    answer: `The welfare of our animals is our top priority. We adhere to
        strict care standards, including proper nutrition, regular exercise,
        and mental stimulation. Our staff and volunteers are trained to recognize
        signs of stress or illness and respond appropriately.`,
  },
];

const FaqAccordion = ({ type }: Props) => {
  const questions = type === "short" ? items.slice(0, 5) : items;

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {questions.map((item, index: number) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="cursor-pointer md:text-base">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 leading-6 text-balance md:text-base md:leading-8 dark:opacity-80">
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
