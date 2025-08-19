import circuit from "../assets/background/circuit.svg";

const OurOfferings = () => {
  return (
    <>
      <section className="w-full min-h-4 select-none bg-[var(--neon-orange)] flex flex-col justify-center items-start gap-x-8 py-8 relative">
        {/* Background color overlay */}
        <div className="absolute inset-0 bg-[var(--neon-orange)]"></div>

        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${circuit})` }}
        ></div>

        {/* Content (not absolute → it expands parent height) */}
        <div className="relative z-10 w-full h-auto py-4">
          <h1 className="text-3xl font-bold px-4 text-white lg:text-center lg:text-4xl">
            OUR OFFERINGS ARE YOUR DESIRES
          </h1>
          <p className="px-4 text-md text-white font-semibold opacity-70 lg:text-center">
            WE OFFER A WIDE VARIETY OF PRODUCTS ,BROWSE NOW.
          </p>
          {/* = */}
          <div className="w-full h-auto flex justify-center p-4">
            <div className="w-full m-auto h-auto grid grid-cols-2 lg:grid-cols-3">
              {/* ==============STYLE FOR CATEGORY================ */}
              <div className="w-auto h-[40px] bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-teal)] to-[var(--neon-purple)] relative rounded-sm">
                <div className="absolute top-[1px] left-1px w-[calc(100%-2px)] h-[calc(100%-2px)] bg-white rounded-sm flex justify-center items-center">
                  <b className="text-sm">BLA BLA BLA BLA</b>
                </div>
              </div>
              {/* ===============END OF CATEGORY================== */}
            </div>
          </div>
          {/* = */}
        </div>
      </section>
    </>
  );
};

export default OurOfferings;
