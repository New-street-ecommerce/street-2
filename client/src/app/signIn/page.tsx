"use client"
import Image from 'next/image'
import Link from 'next/link'
import { login,loginDb } from '../Providers/useApi'

const  SignIn= ()=>  {
const mutation = login()
const mutationdB = loginDb()

    return (
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
                <div className="text-white text-center text-3xl font-extrabold tracking-wide self-stretch max-md:max-w-full">
                  Sign In
                </div>
                <div className="text-indigo-500 text-lg tracking-wide self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                  <span className="text-white">New user?</span>
                  <Link href={"/SignUp"} className="font-medium text-indigo-500">
                    {" "}
                    Create an account
                  </Link >
                </div>
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
                    //   setLoginEmail(event.target.value);
                    }}
                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <br />
                <label className="text-gray-600"></label>
                <div className="relative max-w-xs mt-2">
                  <button
                    className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                    onClick={() => {}}
                  >
                    {/* {isPasswordHidden ? (
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
                    )} */}
                  </button>
                  <input
                    // type={isPasswordHidden ? "password" : "text"}
                    placeholder="Enter your password"
                    onChange={(event) => {
                    //   setLoginPassword(event.target.value);
                    }}
                    className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <Link href={"/"}
                  onClick={()=>{
                    // signIn("hermassi@gmail.com", '123456') 
                 }}
                  className="text-white text-base whitespace-nowrap justify-center items-stretch bg-[linear-gradient(214deg,#B75CFF_6.04%,#671AE4_92.95%)] mt-6 px-5 py-1 rounded-[121px] self-end"
                >
                  Login
                </Link>

                <div className="text-white text-lg tracking-wide self-center whitespace-nowrap mt-1 max-md:mt-4">
                  Or
                </div>

                <br />

                <div className="space-y-4 text-sm font-medium">
                  <button
                    onClick={()=>{}}
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
                </div>
                <br />
                <div className="space-y-4 text-sm font-medium">
                  <button
                    onClick={()=>{}}
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
                          fill="#1877F2"
                          d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0z"
                        />
                        <path
                          fill="#fff"
                          d="M32.91 16.29h-2.795c-1.58 0-1.89.753-1.89 1.857v2.43h4.784l-.5 4.857h-4.284V40H21.3V25.286H16.38v-4.857h4.922v-3.222c0-4.882 2.882-7.545 7.345-7.545 2.13 0 4.07.16 4.607.232v4.98z"
                        />
                      </g>
                      <defs>
                        <rect width="48" height="48" fill="white" />
                      </defs>
                    </svg>
                    Continue With Facebook
                  </button>
                </div>
                <br />
                <div className="space-y-4 text-sm font-medium">
                  <button
                    className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"
                    style={{ width: "100%" }}
                  >
                    {/* <Image
                     
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/76150f2a39957f971b9105d60b750b92d179aec645f32109a9697e21da4d14c6?"
                      className="aspect-[0.83] object-contain object-center w-[25px] fill-white overflow-hidden shrink-0 max-w-full"
                      width="48"
                      height="48"
                      
                    /> */}
                    Continue With Apple
                  </button>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <span className="mr-3 text-gray-700 font-medium"></span>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-radio h-5 w-5 text-pink-600"
                      value="User"
                    //   checked={isUser}
                      onChange={() =>{} }
                    />
                    <span className="ml-2 text-gray-700">Buyer</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="Checkbox"
                      className="form-radio h-5 w-5 text-purple-600"
                      value="Artist"
                    //   checked={}
                    //   onChange={() =>{} }
                    />
                    <span className="ml-2 text-gray-700">Artist</span>
                  </label>
                </div>
                <h4> User Logged In: </h4>
                
                <button
                  className="text-white text-base whitespace-nowrap justify-center items-stretch bg-[linear-gradient(214deg,#B75CFF_6.04%,#671AE4_92.95%)] mt-6 px-5 py-1 rounded-[121px] self-end"
                  onClick={()=>{}}
                >
                  {" "}
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
            </div>
       
    )
}

export default SignIn