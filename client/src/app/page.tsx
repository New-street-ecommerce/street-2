"use client"
import Image from "next/image"
import Link from "next/link"
import art from "../../assets/art.jpg"

export default function Page() {
  return( <div className="flex justify-center items-center flex-col md:flex-row w-full h-screen">
               <div className="w-1/2 flex justify-center items-center">
                <Image
                      className="rounded-lg hover:blur-sm"
                      src={art}
                      width={400}
                      height={400}
                      priority={false}
                      alt='Art'
                  />
              </div>
              <div className="flex flex-col justify-center items-center w-1/2 space-y-4 p-8 ">
                  
                  <Link href="signUpA" className="w-32 text-white-500 border border-white-500 font-bold py-4 px-8 rounded-lg text-xl hover: hover:text-white hover:shadow-lg transition duration-300">
                    Artist
                  </Link>
                  <Link href="signUp" className="w-32 text-white-500 border border-white-500 font-bold py-4 px-8 rounded-lg text-xl hover: hover:  text-white hover:shadow-lg transition duration-300">
                     User 
                  </Link>
              </div>
          </div>
  )
}