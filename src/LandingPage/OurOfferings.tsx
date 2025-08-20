import circuit from "../assets/background/circuit.svg";

const category:string[] = ["Category One","Category Two","Category Three","Category Four","Category Five"]

const OurOfferings = () => {
  return (
    <>
      <section className="w-full min-h-4 py-16 select-none bg-[var(--neon-orange)] flex flex-col justify-center items-start gap-x-8 relative">
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
            <div className="w-full py-4 lg:w-2/3 m-auto h-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
              {/* ==============STYLE FOR CATEGORY================ */}
              {
                category.map((val,index) => (
                  <button key={index} className="px-4 py-2 bg-[transparent] text-white border-2 border-white rounded-2xl text-md font-bold hover:text-sm hover:cursor-pointer">
                    {val}
                  </button>
                ))
              }
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
