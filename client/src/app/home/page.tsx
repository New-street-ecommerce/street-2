"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Brand from "./brand"
interface Product {
  id: number;
  name: string;
  price: number;
  isNew: boolean;
  pictures: string[];
  category: string;
  collectionId: number;
  collection: any;
  clients: any[];
  users: any[];
}


const Home = () => {
  const [question, setQuestion] = useState("");
  
  const [like, setLike] = useState(false);
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products"], // Change the query key to 'products'
    queryFn: () =>
      fetch("http://localhost:5001/product/all").then((res) => res.json()),
    });
    if (isLoading) {
      return (
        <main className="mt-4 flex min-h-screen flex-col items-center">
          Fetching data currently
        </main>
      );
    }
    if (isError) {
      return (
        <main className="mt-4 flex min-h-screen flex-col items-center">
          Error fetching data
        </main>
      );
    }


  const questionPosting = async () => {
    try {
      if (question.trim() === "") {
        return;
      }
      const response = await axios.post(
        "http://localhost:3000/api/Question/Ask",
        {
          question: question,
        }
      );
      console.log("Question posted successfully:", response.data);
      setQuestion("");
    } catch (error) {
      console.error("Error posting question:", error);
    }
  };

  return (
    <>
      
      <div className="flex justify-center pt-[104px] ">
        <div className="flex w-full   justify-around">
          <div className="flex items-center justify-center gap-4 p-4 bg-purple-600 rounded-full w-[164px] h-[45px]">
            <Link href={"/Drops"} className="text-white text-lg font-semibold">
              Main Collection
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4 p-4 bg-zinc-700 rounded-full w-[164px] h-[45px]">
            <Link
              href={"/Profiles"}
              className="text-white text-lg font-semibold"
            >
              Creators Profile
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mx-auto mt-8 flex flex-col items-center justify-evenly pt-20 gap-20 ">
        <div className="flex justify-evenly ">
          
          <div className="w-full text-white text-6xl font-extrabold font-['SF Pro Display'] leading-[81px] tracking-wide">
            Clothes are the
            <br />
            Spirit of Fashion
            <div className="w-90 text-white text-opacity-50 text-xs font-medium font-['SF Pro Display'] leading-7">
              fashion meets creativity in the digital realm! At E-Street, we
              strive to redefine the online shopping experience
            </div>
            <div className=" ">
              <div className="w-fit h-11 px-5 py-2.5 bg-gradient-to-bl from-purple-500 to-violet-700 rounded-lg  gap-2.5 inline-flex mr-[50px]    ">
                <Link
                  href={"/Drops"}
                  className="text-white text-xl font-medium font-['Poppins']"
                >
                  Explore Now
                </Link>
              </div>

              <div className="w-fit h-11 px-5 py-2.5 bg-white bg-opacity-10 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <Link
                  href={""}
                  className="text-white text-xl font-medium font-['Poppins']"
                >
                  Create
                </Link>
              </div>
            </div>
          </div>
          <div>
          <div className="w-[40rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.pinimg.com/564x/2a/92/85/2a92857e154fcef5e9cb933dc2f77634.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.pinimg.com/564x/6d/19/d0/6d19d08a63be5d15aa1ae0bc397f0aca.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.pinimg.com/564x/b2/20/f5/b220f501ebf4651e2e36a67d75c2c8c7.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.pinimg.com/564x/e0/3b/6e/e03b6e1d6383de92284b4512d93fed74.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4  mt-20 ">
              <div>
                <img
                  className=" h-80 max-w-full rounded-lg "
                  src="https://i.pinimg.com/564x/5c/77/df/5c77df5404a69834f29ed4a1131363ad.jpg"
                  alt=""
                />
              </div>


            </div>

          </div>
        </div>
      </div>
        <div className="w-full h-20 flex justify-evenly mt-8 mb-[100px]">
          <div className="w-16 h-20">
            <h1 className="text-white text-3xl font-bold font-['Poppins']">
              100+
            </h1>
            <div className="text-white text-opacity-50 text-xl font-medium font-['Poppins']">
              Brands
            </div>
          </div>
          <div className="w-44 h-20">
            <div className="text-white text-3xl font-bold font-['Poppins']">
              20k+
            </div>
            <div className="text-white text-opacity-50 text-xl font-medium font-['Poppins']">
              Fashion Designer
            </div>
          </div>
          <div className="w-36 h-20">
            <div className="text-white text-3xl font-bold font-['Poppins']">
              60+
            </div>
            <div className="text-white text-opacity-50 text-xl font-medium font-['Poppins']">
              Fashion Shows
            </div>
          </div>
        </div>
      </div>

    
      <div className="flex justify-evenly mb-[100px]">
        <div className="max-w-[994px] ">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[37%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/19b6d30715d60f263ccfaea3aecfe473c66d4a4a93d5e721e1bb60fec7353e0a?"
                className="aspect-[1.39] object-contain object-center w-[143px] overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4777d93cd948a6e64fac875e43e1018157312b0a8f10213a81f2745402535158?"
                className="aspect-[1.79] object-contain object-center w-[163px] overflow-hidden shrink-0 max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2e391c6974916f5e4e959b8d8b286a07261f7f3a8f4caa044b1fe0d006fa6b0?"
                className="aspect-[2.07] object-contain object-center w-[188px] h-[100%] overflow-hidden shrink-0 max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 mx-auto flex flex-col gap-8 items-center mb-[100px]">
        <h1 className="text-white text-5xl font-bold ">About Us</h1>
        <p className="text-gray-500 text-center">
          fashion meets creativity in the digital realm! At E-Street, we strive
          to redefine the online shopping experience,
          <br /> offering a curated selection of cutting-edge streetwear, urban
          fashion, and unique creations from talented designers, brands, and
          artists.
        </p>
      </div>
      <div className="flex justify-center  items-center mb-[200px]">
        <div className="flex flex-col  items-start text-left">
          <div className="text-white  text-4xl  font-bold mb-4">
            Fashion That Speaks
          </div>
          <div className="text-zinc-400 text-xl w-[450px] leading-10 mb-8">
            Discover the intersection of style and creativity on our curated
            streetwear E-commerce platform. Uniting designers, brands, and
            artists, our platform is a dynamic showcase of cutting-edge fashion
            and urban art.
          </div>
        </div>
        <img
          className="ml-4 rounded-md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1yBUgZItHqVo-UrCq3tfqizPCnOHCw2rJ7g&usqp=CAU"
          alt=""
        />
      </div>
      <div className="text-white text-4xl font-bold text-center whitespace-nowrap mt-32 max-md:mt-10   ">
        All Collection
      </div>
      <div className="text-white text-opacity-50 text-center text-xl font-medium leading-10 tracking-wide self-center whitespace-nowrap mt-10 mb-[100px]">
        World's First Layer 2 Fashion Marketplace
      </div>
      <div className="flex flex-col">
        <div className="self-center w-[938px] max-w-full mt-16 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-center my-auto max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a95e74757b623baa50f411bb5afce6fc4154d843db7d74e71034621b02c4591?"
                  className="aspect-square object-contain object-center w-[75px] overflow-hidden max-w-full"
                  alt=""
                />
                <div className="text-white text-center text-xl font-semibold leading-10 tracking-wide self-stretch whitespace-nowrap mt-7">
                  No Gas Fees
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-center max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a95e74757b623baa50f411bb5afce6fc4154d843db7d74e71034621b02c4591?"
                  className="aspect-square object-contain object-center w-[83px] overflow-hidden max-w-full"
                  alt=""
                />
                <div className="text-white text-center text-xl font-semibold tracking-wide self-stretch whitespace-nowrap mt-6">
                  Carbon Neutral NFTs
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-center max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bc88c89587f609bed69726d6c3deb7eb8a549e8bffe7babdcfbc769e8d8b632?"
                  className="aspect-square object-contain object-center w-[84px] overflow-hidden max-w-full"
                  alt=""
                />
                <div className="text-white text-center text-xl font-semibold leading-10 tracking-wide self-stretch whitespace-nowrap mt-6">
                  Fast And Easy Transactions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center  flex gap-5 max-md:flex-wrap">
        <button className="text-white bg-CornellRed text-xl font-medium whitespace-nowrap justify-center  bg-[linear-gradient(214deg,#B75CFF_6.04%,#671AE4_92.95%)]  px-8 py-1.5 rounded-xl max-md:px-5 mt-[100px]">
          All Collections
        </button>
      </div>
      <div className=" p-20 mx-10 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <div
            key={product.id}
            className={`p-2 rounded-md shadow-md transition-transform transform bg-[#ffffff1a] hover:bg-transparent hover:scale-105 hover:opacity-80`}
          >
            <img
              src={product.pictures[0]}
              alt={product.name}
              className="w-full h-100 object-cover mb-2 rounded-md"
            />
            <div className="text-xs font-medium font-['Poppins'] text-gray-500 mb-1">
              {product.category}
            </div>
            <div className="flex">
              <div className="text-sm text-white font-extralight mb-1 mr-20">
                {product.name}
              </div>
              <div className="text-sm font-bold text-green-600">
                ${product.price}
              </div>
            </div>
            <div className="flex items-center">
              <div
                className="mr-4 "
                 onClick={() => {
                  setLike(!like);
                }}
              >
                {like ? <FcLikePlaceholder /> : <FcLike />} 
              </div>
              <button  className="mt-2 ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md self-center">
                <Link href={"/basket"}>Buy Now</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 mx-auto flex flex-col gap-8 items-center">
        <div className="text-white text-4xl font-bold whitespace-nowrap">
          Top Brands
        </div>
      </div>
      <div>
        <div className="p-20 mx-10 mt-8 flex justify-around gap-5">

            <Brand />
        </div>
      </div>
      <div className="p-4 mx-auto flex flex-col gap-8 items-center mt-[65px] ">
        <h1 className="text-white text-4xl font-bold whitespace-nowrap">
          Ask us
        </h1>
        <div className="flex max-w-[590px] flex-col items-stretch">
          <div className="flex w-full items-stretch justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
          <input
              className="text-white bg-transparent  text-opacity-50 text-xl font-medium w-[500px] "
              placeholder="Ask us something we will get to you "
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <button
              className="text-white text-opacity-50 text-xl font-medium self-start"
              onClick={questionPosting}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
