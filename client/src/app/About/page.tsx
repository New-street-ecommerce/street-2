import React from "react";
import { SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiNewbalance } from "react-icons/si";
import { SiPuma } from "react-icons/si";
import { GiWrappingStar } from "react-icons/gi";


function firstDesc() {

    return (
        <>

            <div className="max-w-md mx-auto flex justify-center items-center flex-col">
                <h3 className="text-center font-extrabold no-underline md:underline">About us </h3>
                <h1 className="text-center text-6xl text-white font-sans font-bold">Who we are.</h1>
                <p className="flex-col justify-center items-center text-slate-600 m-6 text-center ">
                    <strong>
                       E-street
                    </strong>
                    {"  "}
                    At e-Street-Commerce, we are more than just an online marketplace.
                     We are a community-driven platform committed to redefining your shopping experience.
                      Our mission is to provide a curated selection of quality products while fostering a sense of connection and trust among our users
                    
                    {" "}
                    is where style meets innovation. Join us in celebrating the diverse world of
                    fashion and indulge
                    in a unique shopping experience that reflects your individuality
                </p>
                <div className="flex justify-center items-center">
                    <p className="bg-[#733709bc] p-2 text-white font-sans w-16">More</p>
                </div>
            </div>


            <div className="lg:flex-row flex flex-col items-center justify-between">
                <div className="mt-20 relative flex flex-col">
                    <h3 className=" font-extrabold no-underline md:underline text-black">Since 2014</h3>
                    <h1 className=" text-6xl text-white font-sans font-bold mt-2">What we do</h1>
                    <p className="flex-col text-slate-600 mt-2 mb-6 justify-center items-center w-full md:w-96 text-center">
                    our passion lies in the art of curation.
                     We meticulously select and present a diverse range of products that reflect the latest trends, quality craftsmanship, and unique designs. 
                     Every item on our platform is a testament to our commitment to offering you a curated, elevated shopping experience."
                    </p>
                    <div className="flex ml-24">
                        <p className="bg-[#733709bc] p-2 text-white font-sans w-16 mb-20 ml-14">More</p>

                    </div >
                </div>
                <div style={{ width: 374, height: 447, right: 0, top: 10, position: 'relative' }}>
                    <img style={{ width: 324, height: 397, left: 50, top: 50, position: 'absolute', borderRadius: 10 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOXf4cniSlV2ZX4bsp78nbJCZzngA1wSwaQ&usqp=CAU" />
                    <img style={{ width: 324, height: 397, left: 25, top: 25, position: 'absolute', boxShadow: '0px 0px 34px rgba(0, 0, 0, 0.35)', borderRadius: 10 }} src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F09%2Fnew-york-fashion-week-ss23-street-style-spring-summer-2023-street-style-looks-001.jpg?cbr=1&q=90" />
                    <img style={{ width: 324, height: 397, left: 0, top: 0, position: 'absolute', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.35)', borderRadius: 10 }} src="https://i.pinimg.com/736x/85/98/61/8598614264a95dec8ee19107e5d42d6c.jpg" />
                </div>
            </div>



            <div className="lg:flex-row-reverse flex flex-col items-center justify-between">
                <div className="mt-20 relative flex flex-col justify-center">
                    <h1 className=" text-6xl text-white font-sans font-bold mt-2">When We Started</h1>
                    <p className="flex-col text-slate-600 mt-5 mb-6 justify-center items-center w-full md:w-96 text-center">
                        Established 2014,  emerged as a vision to redefine fashion exploration.
                        From the outset, we aimed to curate a unique space where creators and fashion aficionados unite.
                        Join us in celebrating the evolution of style as FancyMama continues to make waves in the world of luxury fashion.
                    </p>
                    <div className="flex ml-24">
                        <p className="bg-[#733709bc] p-2 text-white font-sans w-16 mb-20 ml-14 justify-center">More</p>
                    </div >
                </div>
                <div style={{ width: 374, height: 447, right: 0, top: 10, position: 'relative' }}>
                    <img style={{ width: 324, height: 397, left: 50, top: 50, position: 'absolute', borderRadius: 10 }} src="https://i.pinimg.com/736x/85/98/61/8598614264a95dec8ee19107e5d42d6c.jpg" />
                    <img style={{ width: 324, height: 397, left: 25, top: 25, position: 'absolute', boxShadow: '0px 0px 34px rgba(0, 0, 0, 0.35)', borderRadius: 10 }} src="https://pianoluigi.com/cdn/shop/files/versace-la-medusa-bag-women-piano-luigi-1_800x.jpg?v=1691740345" />
                    <img style={{ width: 324, height: 397, left: 0, top: 0, position: 'absolute', boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.35)', borderRadius: 10 }} src="https://www.apetogentleman.com/wp-content/uploads/2019/12/streetwear-brands-best-2.jpg" />
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
           

            <div className="relative mt-8 md:mt-20 pb-12">
            <br /><br /><br /><br /><br />
                <div className="text-center text-white text-4xl md:text-6xl font-extrabold font-sans leading-10 md:leading-14 tracking-wide">Our Makers</div>
                <div className="text-center text-slate-900 text-opacity-50 text-lg md:text-xl font-medium font-sans leading-7 md:leading-9 mt-8">Our community at <strong> E-street</strong>{" "} is a diverse tapestry of trendsetters and fashion enthusiasts. Whether you're a creator shaping the scene or a discerning shopper, our members form the core of a shared love for style and luxury. Join us in the celebration of individuality and expression at FancyMama, where every member contributes to the vibrant world of fashion.</div>
                <div className="flex justify-center space-x-4">
  <img
    className="w-50 h-80 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGp7yJXQKq4G-SunseCI9kr4ur2R3Gm7g4sQ&usqp=CAU"
 
  />
  <img
    className="w-60 h-80 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGp7yJXQKq4G-SunseCI9kr4ur2R3Gm7g4sQ&usqp=CAU"
  />
  <img
    className="w-60 h-80 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGp7yJXQKq4G-SunseCI9kr4ur2R3Gm7g4sQ&usqp=CAU"
  />
  <img
    className="w-60 h-80 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGp7yJXQKq4G-SunseCI9kr4ur2R3Gm7g4sQ&usqp=CAU"
  />
  <img
    className ="w-60 h-80 rounded transition-transform transform hover:scale-110 filter hover:brightness-110"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGp7yJXQKq4G-SunseCI9kr4ur2R3Gm7g4sQ&usqp=CAU"
  />
  
</div>
<br /><br /><br /><br /><br /><br /><br /><br /><br />
              
<div className="absolute top-[-300px] flex flex-col items-center">
  <div className="transform -rotate-0 origin-center text-6xl font-bold text-gray-800">*
  <GiWrappingStar />
    Elegance Present Us 
  </div>
  <br />

  <div className="ml-[500px] flex items-center space-x-40 mt-2">
    <SiNike className="w-20 h-20 text-gray-500 transition-transform transform hover:scale-110" />
    <SiAdidas className="w-20 h-20 text-gray-500 transition-transform transform hover:scale-110" />
    <SiNewbalance className="w-20 h-20 text-gray-500 transition-transform transform hover:scale-110" />
    <SiPuma className="w-20 h-20 text-gray-500 transition-transform transform hover:scale-110" />
  </div>
</div>

            </div>
        </>
    )
}

const About = () => {
    return (
        <>
            <div className="px-16">
                {firstDesc()}
            </div>
        </>
    )
}

export default About