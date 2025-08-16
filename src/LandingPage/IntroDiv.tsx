const IntroDiv = () => {
  return (
    <>
      <section className="w-full h-[calc(100dvh-80px)] bg-white relative">
        <section className="absolute w-full  bg-red-800 top-0 left-[0%] lg:left-[25%] lg:w-1/2 h-full flex flex-col gap-4 justify-center items-center blur">
          <span className="w-1/2 h-1/4 bg-[var(--neon-teal)] rounded-full opacity-70"></span>
          <span className="w-1/2 h-1/4 bg-[var(--neon-orange)] rounded-full opacity-70"></span>
          <span className="w-1/2 h-1/4 bg-[var(--neon-purple)] rounded-full opacity-70"></span>
        </section>
      </section>
    </>
  );
};

export default IntroDiv;
