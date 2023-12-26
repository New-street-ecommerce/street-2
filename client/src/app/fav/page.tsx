"use client"
import React from 'react'
import { useQuery } from "@tanstack/react-query";
import ProductDetails from './productDetails';

interface favList {
    id: number;
    userId: number;
    productId: number;
    product: {
      id: number;
      name: string;
      price: number;
      isNew: boolean;
      pictures: string[];
      collectionId: number;
      category: string;
    };
  }

const Page = () => {
  const getStorage = localStorage.getItem("user") || "1"
  const storage = JSON.parse(getStorage)
  const user = storage.data.id
  const {data, isError, isLoading} = useQuery<favList[]>({
    queryKey:  ["favList"],
    queryFn : ()=>
    fetch(`http://localhost:5000/favlist/${user}`).then((res) => res.json()),
  })
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
console.log(data)
  return (
    <div>
      <h1 className=' text-center text-white text-5xl mt-14'>Your Favorite List</h1>
        {data?.map((product,key)=>(
            <div>
              <ProductDetails data ={product}/>  
            </div>
        ))}
    </div>
  )
}

export default Page