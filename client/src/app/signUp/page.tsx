"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import main from "../../../assets/main.png"
import { useRouter } from "next/navigation";

import { register, registerDb , login, loginDb} from "../Providers/useApi";

const signUp = () => {
  const router = useRouter()
  const [registerEmail, setRegisterEmail] = useState("");
  const [registeruserName, setRegisterUserName] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [dateOfB, setDateOfB] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const mutation = register();
  const mutation2 = registerDb("user");
  const mutation3 = login()
  const mutation4 = loginDb("user")
    
  return (
    <>
      <div className="relative mt-6 flex w-full h-screen flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
      <div className="w-full mb-20 max-md:max-w-full max-md:my-10">
          <div className="gap-5 md:flex max-md:items-stretch max-md:gap-0">
            <div className="flex flex-wrap justify-center w-1/2 max-md:ml-0">
              <div className=" items-center hidden md:block w-1/2 max-md:max-w-full max-md:mt-10">
                <Image
                  src={main}
                  width={300}
                  height={300}
                  alt="taswira"
                  priority={false}
                />
                <div className="text-white text-center text-3xl font-bold leading-10 tracking-wide self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                  Explore the world of meta fashion
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch h-[49%] ml-5">
              <form
                className="bg-login bg-opacity-20 flex grow flex-col w-full py-7 rounded-xl "
                onSubmit={(event) => {  
                  event.preventDefault();
                  mutation.mutate({ email: registerEmail
                  , password: registerPassword });
                  mutation2.mutate({email:registerEmail,name:registerName,username:registeruserName,dateOfBirth:dateOfB})
                  mutation3.mutate({ email: registerEmail, password: registerPassword })
                  mutation4.mutate({email: registerEmail})
                  router.push('/home')
                
                }}
              >
                <div className="self-stretch flex flex-col max-md:max-w-full max-md:px-5">
                  <div className="text-white text-center text-3xl font-extrabold tracking-wide self-stretch">
                    Sign Up
                  </div>
                  <div className="font-medium font-sfprodisplay ml-1.5 md:ml-0 mt-[22px]  text-lg tracking-[0.36px]">
                    <span className="text-white-A700 text-left font-normal">
                      Already a Member?
                    </span>
                    <span className="text-deep_purple-400 text-left font-normal">
                      {" "}
                    </span>
                    <Link
                      href={"/signIn"}
                      className="font-medium text-CadetGray-500"
                    >
                      Sign In
                    </Link>
                  </div>
                  <div className="font-medium font-sfprodisplay ml-1.5 md:ml-0 mt-[22px]  text-lg tracking-[0.36px]">
                    <span className="text-white-A700 text-left font-normal">
                      Are you an artist?
                    </span>
                    <span className="text-deep_purple-400 text-left font-normal">
                      {" "}
                    </span>
                    <Link
                      href={"/signUpA"}
                      className="font-medium text-CadetGray-500"
                    >
                      Sign Up
                    </Link>
                  </div>
                  <br />
                  <div className="relative">
                    <svg
                      className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <input
                      type="text"
                      name="email"
                      
                      placeholder="Enter your email"
                      onChange={(event) => {
                        setRegisterEmail(event.target.value);
                      }}
                      className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <br />
                  <div className="flex items-center justify-center">
                    <div className="w-full flex gap-3">
                      <input
                        type="text"
                        placeholder="Name"
                        id="Name"
                        name="Name"
                        onChange={(e) => setRegisterName(e.target.value)}
                        className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="username"
                        id="userName"
                        name="userName"
                        onChange={(e) => setRegisterUserName(e.target.value)}
                        className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-2">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        onChange={(event) => {
                          setRegisterPassword(event.target.value);
                        }}
                        className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="mt-1">
                      <input
                        type="date"
                        name="dob"
                        onChange={(e) => setDateOfB(e.target.value)}
                        id="dob"
                        className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white text-base whitespace-nowrap justify-center items-stretch bg-[#C3141D] mt-6 px-5 py-1 rounded-[121px] self-end"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default signUp;
