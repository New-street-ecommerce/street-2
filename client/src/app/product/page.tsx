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
      <main className='mt-4 flex min-h-screen flex-col items-center justify-between p-24'> 
        <h1 className='text-xl'>Products</h1>
        <div>
          {Array.isArray(products) && products.map((product: Product) => (
            <ul key={product.id}>
              <li>Name: {product.name}</li>
              <li>Price: {product.price}</li>
              <li>Pictures: {product.pictures[0]}</li> {/* Assuming pictures is an array */}
              <li>Category: {product.category}</li>
              <li>Collection: {product.collection}</li>
            </ul>
          ))}
        </div>
      </main>
    );
  };
  
export default Page;