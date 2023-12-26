import React from 'react'
import { useQuery } from "@tanstack/react-query";
interface Brand {
  id: number;
  name: string;
  picture: string
}
const Brand = () => {
  
 
  var  { isError,isLoading, data: brand } = useQuery<Brand[]>({
    queryKey: ["brand"], 
    queryFn: () =>
      fetch("http://localhost:5000/brand").then((res) => res.json()),
  });
  if (isLoading) {
    return (
      <main className="mt-4 flex min-h-screen flex-col items-center">
        Fetching data 
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
console.log(brand)


  return (
    <div>
                {brand?.map((brand) => (
            <div
              key={brand.id}
              className={`p-2 rounded-md shadow-md transition-transform transform bg-[#ffffff1a] hover:bg-transparent hover:scale-105 hover:opacity-80`}
            >
              <img
                src={brand.picture}
                alt={brand.name}
                className=" h-72 w-72 object-cover mb-2 rounded-md"
              />
              <div className="text-xl font-medium font-['Poppins'] text-gray-500 mb-1">
                Brand
              </div>
              <div className="flex items-center">
              <div className="text-2xl tex  text-white font-extralight mb-1 mr-20">
              {brand.name}
              </div>
              </div>
              </div>
            ))}
    </div>
  )
}

export default Brand