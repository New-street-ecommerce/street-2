import { useState } from "react";
import React from 'react'
import { useQuery } from "@tanstack/react-query";
interface Brand {
  id: number;
  name: string;
  picture: string
}
const Brand = () => {
  const [followedBrands, setFollowedBrands] = useState<number[]>([]);
 
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
const handleFollowClick = async (brandId: number) => {
  try {
    
    const isFollowed = followedBrands.includes(brandId);

    
    const updatedFollowedBrands = isFollowed
      ? followedBrands.filter((id) => id !== brandId)
      : [...followedBrands, brandId];

    
    setFollowedBrands(updatedFollowedBrands);

    
    const userId = 123;
    const response = await fetch(
      isFollowed
        ? `http://localhost:5000/follow/unfollow/${brandId}/${userId}`
        : `http://localhost:5000/follow/brand/${brandId}/${userId}`,
      {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      
      console.error('Error updating follow status:', response.statusText);
    }
  } catch (error) {
    
    console.error('Error:', error);
  }
};


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
            className="w-full h-60 object-cover mb-2 rounded-md"
          />
          <div className="text-xl font-medium font-['Poppins'] text-gray-500 mb-1">
            Brand
          </div>
          <div className="flex items-center">
            <div className="text-2xl text-white font-extralight mb-1 mr-20">
              {brand.name}
            </div>
            <button
              className={`text-sm text-white px-3 py-1 rounded-md ${
                followedBrands.includes(brand.id)
                  ? 'bg-red-500' 
                  : 'bg-blue-500' 
              } hover:bg-blue-700`}
              onClick={() => handleFollowClick(brand.id)}
            >
              {followedBrands.includes(brand.id) ? 'Unfollow' : 'Follow'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Brand