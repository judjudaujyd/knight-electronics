import circuit from "../../assets/background/circuitInverted.svg";
import { Link } from "react-router-dom";

const SignUp = () => {

  const Feilds:string[] = ["First Name","Last Name","Email","Phone Number","Password","Confirm Password"]

  return (
    <>
      <section className="w-full h-dvh bg-white relative">
        <section
          className="w-full h-full absolute top-0 left-0"
          style={{ backgroundImage: `url(${circuit})` }}
        ></section>
        <section className="w-2/3 h-2/3 absolute top-1/6 left-1/6 bg-white rounded-lg flex justify-center items-center flex-col xl:flex-row">

        <section className="w-full xl:w-1/3 h-auto flex flex-col justify-center items-center p-4 select-none">
          <h1 className="text-4xl font-bold text-[var(--neon-orange)]">SIGN UP</h1>
          <small className="text-sm opacity-70 font-light">ALREADY HAVE A ACCOUNT ? <Link className="text-[var(--neon-orange)] hover:cursor-pointer" to="#">SIGN IN</Link></small>
        </section>

        <section className="w-full xl:w-2/3 h-auto flex justify-center items-center">
          <form className="w-full h-auto grid grid-cols-2 gap-2 p-4">
            
            {
              Feilds.map((val,index) => (
                <input type="text" name={val} key={index} placeholder={val} className="px-2 py-2 border-[var(--neon-orange)] outline-none border-2 focus:border-[var(--neon-teal)]"/>
              ))
            }

            <input type="submit" value="REGISTER" className="col-span-2 px-2 py-2 text-sm font-bold bg-[var(--neon-orange)] outline-none text-white border-[var(--neon-orange)] border-2 hover:cursor-pointer hover:opacity-80" />
          </form>
        </section>
          
        </section>
      </section>
    </>
  );
};

export default SignUp;
