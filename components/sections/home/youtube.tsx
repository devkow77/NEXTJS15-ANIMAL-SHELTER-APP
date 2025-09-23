import { Container } from "@/components/shared/index";

const Youtube = () => {
  return (
    <section aria-labelledby="youtube-title" className="mb-12">
      <Container className="space-y-6 lg:space-y-12">
        <h2
          id="youtube-title"
          className="text-center text-2xl font-black md:text-left md:text-3xl"
        >
          Watch Us On YT!
        </h2>
        <div className="gap-8 md:flex lg:gap-12">
          <p className="hidden w-1/2 text-sm leading-6 md:block md:text-base md:leading-8 dark:opacity-80">
            Discover more about our journey, values, and behind-the-scenes
            stories by watching our videos on YouTube.
          </p>
          <figure className="aspect-video rounded-2xl md:w-1/2 md:rounded-4xl">
            <iframe
              src={`https://www.youtube.com/embed/MlRvGKJXifY`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-2xl shadow-lg md:rounded-4xl"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
};

export default Youtube;
