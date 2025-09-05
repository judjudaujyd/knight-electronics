import { IoNavigate } from "react-icons/io5";

const WhyUs = () => {
  return (
    <>
      <section className="flex flex-col justify- py-20 items-center h-auto select-none">
        <section className="w-full bg-white h-auto py-16">
          <div className="w-full h-auto my-4 p-4 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-[var(--neon-orange)]">
              WHY US?
            </h1>
            <p className="text-md font-semibold text-[var(--neon-orange)]">
              WE PROVIDE RELAIABLE HARDWARE FOR YOUR PROJECTS ,WE ALSO PROVIDE
              EXCLUSIVE SERVICES FOR OUR CUSTOMERS.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 justify-center items-center h-auto p-4">
            <div className="w-full lg:w-3/4 h-72 bg-orange-300 hover:bg-[var(--neon-orange)] relative z-0 rounded-lg">
              <div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] top-[1px] left-[1px] flex flex-col gap-2 justify-center items-center z-10 bg-white rounded-lg">
                <h1 className="text-2xl bg-gradient-to-r from-[var(--neon-teal)] via-[var(--neon-orange)] to-[var(--neon-purple)] bg-clip-text text-transparent">
                  THE ALL IN ONE STOP
                </h1>
                <p className="p-4 text-center">
                  From logical IC's to counters ,from boards to batteries .We
                  provide everything ,all in one stop.
                </p>
                <button className="w-auto flex justify-center items-center bg-[var(--neon-orange)] mx-4 px-4 py-2 rounded-lg gap-2 hover:cursor-pointer hover:bg-orange-300 hover:rounded-lg">
                  <p className="text-white text-sm opacity-100">
                    BROWSE PRODUCTS
                  </p>
                  <IoNavigate className="text-white text-xl opacity-100" />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-3/4 h-72 bg-orange-300 hover:bg-[var(--neon-orange)] relative z-0 rounded-lg">
              <div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] top-[1px] left-[1px] flex flex-col gap-2 justify-center items-center z-10 bg-white rounded-lg">
                <h1 className="text-2xl bg-gradient-to-r from-[var(--neon-teal)] via-[var(--neon-orange)] to-[var(--neon-purple)] bg-clip-text text-transparent">
                  WANT PRE-BUILT PROJECTS?
                </h1>
                <p className="p-4 text-center">
                  We provide services to built you projects with explaination
                  with the help of our reliable team.
                </p>
                <button className="w-auto flex justify-center items-center bg-[var(--neon-orange)] mx-4 px-4 py-2 rounded-lg gap-2 hover:cursor-pointer hover:bg-orange-300 hover:rounded-lg">
                  <p className="text-white text-sm opacity-100">
                    BROWSE SERVICES
                  </p>
                  <IoNavigate className="text-white text-xl opacity-100" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default WhyUs;
