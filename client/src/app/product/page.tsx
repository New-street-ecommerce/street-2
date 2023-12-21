'use client'


// import { useEffect, createContext } from 'react';
import { useQuery,useIsFetching } from '@tanstack/react-query';
// import axios from 'axios';

// const Context = createContext();
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

  const Page = () => {
    const { data: products, isLoading, isError, isSuccess } = useQuery<Product[]>({
      queryKey: ['products'], // Change the query key to 'products'
      queryFn: () =>
        fetch("http://localhost:5000/product/all").then((res) =>
          res.json()
        ),
    });
  
    if (isLoading) {
      return <main className='mt-4 flex min-h-screen flex-col items-center'>Fetching data currently</main>
    }
  
    if (isError) {
      return <main className='mt-4 flex min-h-screen flex-col items-center'>Error fetching data</main>
    }
  
    console.log("Products:", products);
  
    return (
      <div className="container mx-auto p-4 lg:h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-100">
          {Array.isArray(products) &&
            products.map((product: Product, index: number) => (
              <div key={index} className="w-full max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
                <img
                  src={product.pictures[0]}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-10 backdrop-blur text-white p-4 rounded-b-lg">
                  <h1 className="text-2xl font-semibold">{product.name}</h1>
                  <p className="mt-2">{product.category}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  
export default Page;

// https://www.youngla.com/cdn/shop/products/YLA10.29.22Johnny-98_800x.jpg?v=1666901743