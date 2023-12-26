"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GrCart } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";
// import { useMutation } from "react-query";
import { useDeleteCart } from "../Providers/useApi";

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
  const [productQuantities, setProductQuantities] = useState<
    Record<number, number>
  >({});
  const deleteCartMutation = useDeleteCart(Number);
  const getStorage = localStorage.getItem("user") || '{"data": {"id": "1"}}';
  const storage = JSON.parse(getStorage);
  const user = storage.data.id;
  console.log(productQuantities);
  var { isError, isLoading, data } = useQuery<Cart[]>({
    queryKey: ["cart"],
    queryFn: () =>
      fetch(`http://localhost:5000/cart/${user}`).then((res) => res.json()),
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

  const incrementQuantity = (productId: number) => {
    // Use the product ID to update the quantity for a specific product
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };
  const decrementQuantity = (productId: number) => {
    // Use the product ID to update the quantity for a specific product
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 1),
    }));
  };
  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };
  const getTotalAmount = (ele: any) => {
    const productQuantity = productQuantities[ele.id] || 1;
    return (ele.product.price * productQuantity).toFixed(2);
  };
  const getOverallTotalAmount = () => {
    let total = 0;
    data?.forEach((ele) => {
      const productQuantity = productQuantities[ele.id] || 1;
      total += ele.product.price * productQuantity;
    });
    return total.toFixed(2);
  };
  return (
    <div className="relative">
      <div>
        <GrCart
          onClick={toggleCartVisibility}
          className="cursor-pointer text-3xl"
        />
      </div>

      {cartVisible && (
        <div className=" iphone:w-96 top-30 right-4 bg-white p-4 rounded shadow-md w-[1300px] mr-7 float-right">
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
                    ${ele.product.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div>
                <span className="text-gray-600">Total:</span>
                <span className="text-xl font-bold">
                  ${getTotalAmount(ele)}
                </span>
              </div>

              <div className="flex items-center">
                <button
                  className="bg-Charcoal text-white px-3 py-1 rounded mr-2"
                  onClick={() => decrementQuantity(ele.id)}
                >
                  -
                </button>
                {/* Replace 'quantity' with 'productQuantities[ele.id]' */}
                <span className="text-xl font-bold">
                  {productQuantities[ele.id] || 1}
                </span>
                <button
                  className="bg-Charcoal text-white px-3 py-1 rounded ml-2"
                  onClick={() => incrementQuantity(ele.id)}
                >
                  +
                </button>
              </div>

              <button
                className="bg-CornellRed text-white font-bold py-2 px-7 border-red-700 hover:border-red-500 rounded hover:bg-red-950"
                onClick={() => deleteCartMutation.mutate(ele.id)}
              >
                Delete
              </button>
            </div>
          ))}
          <div className="mt-4">
            <span className="text-gray-600">Overall Total:</span>
            <span className="text-xl font-bold">
              ${getOverallTotalAmount()}
            </span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            commande
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
