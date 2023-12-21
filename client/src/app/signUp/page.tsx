"use client"
import app from "../firebase/config";
import axios from 'axios'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
=
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);
const signUp =  () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registeruserName, setRegisterUserName] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [dateOfB, setDateOfB] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    // const [isArtist, setIsArtist] = useState(false);
    // const navigate = useNavigate();


const register = async (email:string, password:string)=> {
    let user = null,
        error = null;
    try {
        user = await createUserWithEmailAndPassword(auth, email, password);
        localStorage.setItem("user", JSON.stringify(user))
        console.log("User signed up successfully:", user)
    } catch (error) {
        return error
    }

   

    return (  <>
          <div className="relative bg-[linear-gradient(113deg,#984D38_-30.3%,#181E41_58.12%)] flex w-full h-screen flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
            <div className="w-full max-w-[1131px] mt-28 mb-20 max-md:max-w-full max-md:my-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-center mt-8 max-md:max-w-full max-md:mt-10">
                  <Image
                src="/assets/main.png"
                width={500}
                height={500}
                alt="taswira"
                priority={true}
              />
                    <div className="text-white text-center text-3xl font-bold leading-10 tracking-wide self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                      Explore the world of meta fashion
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[36%] h-[36%] ml-5 max-md:w-full max-md:ml-0 mt-[-10%]">
                  <div className="bg-login bg-opacity-20 flex grow flex-col w-full py-7 rounded-xl max-md:max-w-full max-md:mt-10">
                    <div className="self-stretch flex flex-col px-9 max-md:max-w-full max-md:px-5">
                      <div className="text-white text-center text-3xl font-extrabold tracking-wide self-stretch">
                        Sign Up
                      </div>
                      <div className="font-medium font-sfprodisplay ml-1.5 md:ml-0 mt-[22px] text-deep_purple-400 text-lg tracking-[0.36px]">
                        <span className="text-white-A700 text-left font-normal">
                          Already a Member?
                        </span>
                        <span className="text-deep_purple-400 text-left font-normal">
                          {" "}
                        </span>
                        <Link href={"/SignUp"} className="font-medium text-indigo-500">
                          Sign In
                        </Link>
                      </div>
                      <br />
                      <div className="relative max-w-xs">
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
                            setRegisterEmail(event.target.value);
                          }}
                          className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                      </div>
                      <br />
                      <div className="flex items-center justify-center">
                        <div className="w-full flex gap-3">
                          <input
                            // class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
                            type="text"
                            placeholder="Name"
                            id="Name"
                            name="Name"
                           
                            onChange={(e) => setRegisterName(e.target.value)}
                            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                          />
                          <input
                            className="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                            type="text"
                            placeholder="+216"
                            id="userName"
                            name="userName"
                            onChange={(e) => setRegisterUserName(e.target.value)}
                            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-gray-600">Password</label>
                        <div className="relative max-w-xs mt-2">
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
                        <label
                          className="block text-sm font-medium text-gray-700"
                        //   for="dob"
                        >
                          Date of Birth
                        </label>
                        <div className="mt-1">
                          <input
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            // required=""
                            type="date"
                            name="dob"
                            onChange={(e) => setDateOfB(e.target.value)}
                            id="dob"
                            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mt-6">
                      <span className="mr-3 text-gray-700 font-medium"></span>
                      <label className="inline-flex items-center">
                        {/* <input
                          type="checkbox"
                          className="form-radio h-5 w-5 text-pink-600"
                          value="User"
                          checked={isUser}
                          onChange={() => {setIsUser(!isUser)
                            console.log(isUser)
                          }}
                        /> */}
                        <span className="ml-2 text-gray-700">Buyer</span>
                      </label>
                      <label className="inline-flex items-center ml-6">
                        <input
                          type="Checkbox"
                          className="form-radio h-5 w-5 text-purple-600"
                          // value="Artist"
                         
                          onChange={() => {
                          
                          }}
                        />
                        <span className="ml-2 text-gray-700">Artist</span>
                      </label>
                    </div>
    
                    <div className="mt-6 flex items-center justify-between"></div>
                    <button
                      onClick={()=>{
                        register(email,password)
                         signUp()
                      }}
                      className="text-white text-base whitespace-nowrap justify-center items-stretch bg-[linear-gradient(214deg,#B75CFF_6.04%,#671AE4_92.95%)] mt-6 px-5 py-1 rounded-[121px] self-end"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
            /
          </div>
        </>
      );
    };
    
}