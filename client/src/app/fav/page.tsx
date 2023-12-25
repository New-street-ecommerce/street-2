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
  const {data, isError, isLoading} = useQuery<favList[]>({
    queryKey:  ["favList"],
    queryFn : ()=>
    fetch("http://localhost:5001/favlist/1").then((res) => res.json()),
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
        {data?.map((product,key)=>(
            <div>
              <ProductDetails data ={product}/>  
            </div>
        ))}
    </div>
  )
}

export default Page