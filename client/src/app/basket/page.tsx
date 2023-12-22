"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GrCart } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";
// import { useMutation } from "react-query";
import {useDeleteCart  } from "../Providers/useApi"


interface Cart {
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

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);
  const [cartVisible, setCartVisible] = useState(true);
  
  
  const deleteCartMutation = useDeleteCart(Number);
  var { isError, isLoading, data } = useQuery<Cart[]>({
    queryKey: ["cart"],
    queryFn: () =>
      fetch("http://localhost:5001/cart/1").then((res) => res.json()),
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


    const getTotalPrice = (ele: any) => {
      return (ele.product.price * quantity).toFixed(2);
    };

    const incrementQuantity = () => {
      setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

  //   const toggleCartVisibility = () => {
  //     setCartVisible(!cartVisible);
  //   };

  return (
    <div className="relative">
      <div>
        <GrCart
            // onClick={toggleCartVisibility}
          className="cursor-pointer text-3xl"
        />
      </div>

      {cartVisible && (
        <div className="top-30 right-4 bg-white p-4 rounded shadow-md w-80 float-right">
          <h2 className="text-xl font-semibold mb-4"> Cart</h2>

          {data?.map((ele, i) => (
            <div
              key={i}
              className="flex items-center justify-between mb-4 border-b pb-2"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={ele.product.pictures[0]}
                    alt="Product Image"
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <p className="font-semibold">{ele.product.name}</p>
                  <p className="text-gray-500">
                    ${(ele.product.price * quantity).toFixed(2)}
                  </p>
                </div>
                <span className="text-gray-600">Total:</span>
                <span className="text-xl font-bold">${getTotalPrice(ele)}</span>
              </div>

              <div className="flex items-center">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                    onClick={decrementQuantity}
                >
                  -
                </button>
                <span className="text-xl font-bold">{quantity}</span>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded ml-2"
                    onClick={incrementQuantity}
                >
                  +
                </button>
              </div>

              <button
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                onClick={()=>deleteCartMutation.mutate(ele.id)}
              >
                Delete
              </button>
            </div>
          ))}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            commande
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
