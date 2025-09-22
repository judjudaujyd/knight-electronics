import { useState, type FormEvent } from "react";
import circuit from "../../../assets/background/circuit.svg";
import { Link } from "react-router-dom";

// HandleRequests

import signUPApi from "./SignUpAPi";

const SignUp = () => {
const [error , setError] = useState<string | null>(null)

  // ================ Array Of Feilds ======================
  type Field = {
    name: string;
    placeHolder: string;
    type?: string;
  };

  const Fields: Field[] = [
    { name: "firstName", placeHolder: "Enter First Name" },
    { name: "lastName", placeHolder: "Enter Last Name" },
    { name: "email", placeHolder: "Enter Email", type: "email" },
    { name: "phoneNumber", placeHolder: "Enter Phone Number" },
    { name: "password", placeHolder: "Create A Password", type: "password" },
    { name: "confirmPassword",placeHolder: "Confirm Password",type: "password"}
  ];

  // ============== Handle Form ========================

  const handleForm = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEntries = new FormData(e.currentTarget);
    
    const formData = Object.fromEntries(formEntries.entries()) as Record<
      string,
      string
    >;
    const authRes = formData.password == formData.confirmPassword ? await signUPApi(formData as any) : setError("Passwords Do Not Match");
    if(authRes.errors){
      setError(authRes.errors[0].msg)
    }

  };

  return (
    <>
      <section className="w-full h-dvh bg-white relative">
        <section
          className="w-full h-full absolute top-0 left-0"
          style={{ backgroundImage: `url(${circuit})` }}
        ></section>
        <section className="w-2/3 h-2/3 absolute top-1/6 left-1/6 bg-white rounded-lg flex justify-center items-center flex-col xl:flex-row">
          <section className="w-full xl:w-1/3 h-auto flex flex-col justify-center items-center p-4 select-none">
            <h1 className="text-4xl font-bold text-[var(--neon-orange)]">
              SIGN UP
            </h1>
            <small className="text-sm opacity-70 font-light">
              ALREADY HAVE A ACCOUNT ?{" "}
              <Link
                className="text-[var(--neon-orange)] hover:cursor-pointer"
                to="#"
              >
                SIGN IN
              </Link>
            </small>
          </section>

          <section className="w-full xl:w-2/3 h-auto flex justify-center items-center">
            <form
              className="w-full h-auto grid grid-cols-2 gap-2 p-4"
              onSubmit={handleForm}
            >
              {Fields.map((field, index) => (
                <input
                  key={index}
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.placeHolder}
                  className="px-2 py-2 border-2 border-[var(--neon-orange)] outline-none focus:border-[var(--neon-teal)]"
                  required
                />
              ))}

              <input
                type="submit"
                value="REGISTER"
                className="col-span-2 px-2 py-2 text-sm font-bold bg-[var(--neon-orange)] outline-none text-white border-[var(--neon-orange)] border-2 hover:cursor-pointer hover:opacity-80"
              />

              {
              error && (
                <p className="col-span-2 text-sm opacity-70 font-semibold">{error}</p>
              )}
            </form>
          </section>
        </section>
      </section>
    </>
  );
};

export default SignUp;
