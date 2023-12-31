"use client";
import Image from "next/image";
import Link from "next/link";
import { login, loginDb, signInWithGoogle } from "../Providers/useApi";
import { useState } from "react";
import main from "../../../assets/main.png";
import { useRouter } from 'next/navigation'

const SignInA = () => {
  const router = useRouter()
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);
  const mutation = login();
  const mutationdB = loginDb("artist");
  const mutationG = signInWithGoogle("artist")
  mutationG.isSuccess && router.push("/home")
  return (
    <div className="relative mt-6 flex w-full h-screen flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
    <div className="w-full mb-20 max-md:max-w-full max-md:my-10">
      <div className="gap-5 md:flex max-md:items-stretch max-md:gap-0">
        <div className="flex flex-wrap justify-center w-1/2 max-md:ml-0">
          <div className="items-center hidden md:block w-1/2 max-md:max-w-full max-md:mt-10">
            <Image
              src={main}
              width={400}
              height={400}
              alt="taswira"
              priority={false}
              className=""
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
                mutation.mutate({ email: loginEmail, password: loginPassword });
                mutationdB.mutate({ email: loginEmail });
              }}
            >
              <div className="text-white text-center text-3xl font-extrabold tracking-wide self-stretch max-md:max-w-full">
                Sign In
              </div>
              <div className="text-white-500 text-lg tracking-wide self-stretch mt-4 max-md:max-w-full max-md:mt-10">
                <span className="text-white">New user?</span>
                <Link
                  href={"/signUpA"}
                  className="font-medium text-CornellRed-500"
                >
                  {" "}
                  Create an account
                </Link>
              </div>
              <div className="text-white-500 text-lg tracking-wide self-stretch mt-2  mb-2 max-md:max-w-full max-md:mt-10">
                <span className="text-white">You're not an artist?</span>
                <Link
                  href={"/signIn"}
                  className="font-medium text-CornellRed-500"
                >
                  {" "}
                  Sign In
                </Link>
              </div>
              <div className="relative ">
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
                  placeholder="Enter your email"
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <br />
              <label className="text-gray-600"></label>
              <div className="relative  mt-2">
                <button
                  className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                  onClick={() => {
                    setPasswordHidden(!passwordHidden);
                  }}
                >
                  {passwordHidden ? (
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </button>
                <input
                  type={passwordHidden ? "password" : "text"}
                  placeholder="Enter your password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                  className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="text-white text-base whitespace-nowrap justify-center items-stretch bg-[#C3141D] mt-6 px-5 py-1 rounded-[121px] self-end"
              >
                Login
              </button>
              <div className="text-white text-lg tracking-wide self-center whitespace-nowrap mt-1 max-md:mt-4">
                Or
              </div>
              <br />
              <div className="space-y-4 text-sm font-medium">
              </div>
              <br />
              <div className="space-y-4 text-sm font-medium">
              
              </div>
              <br />
              <div className="space-y-4 text-sm font-medium">
              </div>
              <button
                  onClick={() => {mutationG.mutate()}}
                  className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_17_40)">
                      <path
                        d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                        fill="#34A853"
                      />
                      <path
                        d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <rect width="48" height="48" fill="white" />
                    </defs>
                  </svg>
                  Continue with Google
                </button>
              <button
                className="text-white text-base whitespace-nowrap justify-center items-stretch bg-[#C3141D] mt-6 px-5 py-1 rounded-[121px] self-end"
                onClick={() => { localStorage.removeItem("user")}}
              >
                {" "}
                Sign Out
              </button>
            </form>
          </div>
        
      </div>
    </div>
    </div>
  );
};

export default SignInA;
