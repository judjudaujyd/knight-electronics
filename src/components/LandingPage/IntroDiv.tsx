import { MdOutlineNavigateNext } from "react-icons/md";

const IntroDiv = () => {
  return (
    <>
      <section className="w-full h-[calc(100dvh-80px)] bg-white relative">
        <section className="absolute w-full top-0 left-[0%] lg:left-[25%] lg:w-1/2 h-full flex flex-col gap-4 justify-center items-center blur-md z-0">
          <span className="w-1/2 animate-bounce h-1/4 bg-[var(--neon-teal)] rounded-full opacity-70"></span>
          <span className="w-1/2 animate-bounce h-1/4 bg-[var(--neon-orange)] rounded-full opacity-70"></span>
          <span className="w-1/2 animate-bounce h-1/4 bg-[var(--neon-purple)] rounded-full opacity-70"></span>
        </section>

        <section className="absolute w-full top-0 h-full z-10 flex flex-col justify-center items-start lg:items-center select-none gap-y-4">
          <div className="flex justify-center items-start lg:items-center flex-col px-4">
            <h2 className="text-8xl font-bold bg-gradient-to-r from-[var(--neon-teal)] via-[var(--neon-orange)] to-[var(--neon-purple)] bg-clip-text text-transparent">
              DIVE RIGHT IN!
            </h2>
            <p className="text-sm">Search For Your Deired Products Today</p>
          </div>
          <div className="w-full flex justify-start lg:justify-center items-start px-4">
            <button className=" w-auto flex justify-center items-center bg-[var(--neon-orange)] mx-4 px-4 py-2 rounded-lg gap-2 opacity-70 hover:cursor-pointer hover:grayscale-50 hover:rounded-2xl">
              <p className="text-white text-sm opacity-100">SHOP NOW</p>
              <MdOutlineNavigateNext className="text-white text-2xl opacity-100" />
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default IntroDiv;
