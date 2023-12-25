"use client"
import React from 'react';
import { deleteItemFav } from '../Providers/useApi';

const ProductDetails = (props: any) => {
  const { name, pictures } = props.data.Product;
  const mutation = deleteItemFav()


  const handleDelete = async () => {
    await mutation.mutate(props.data.Id)
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-md my-8 flex flex-col items-center sm:flex-row sm:items-start">
      <img src={pictures[0]} className="w-32 h-32 object-cover mb-4 rounded-md sm:mr-4" alt="" />
      <div className="flex flex-col items-center sm:items-start">
        <h1 className="text-2xl font-bold mb-2">{name}</h1>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
        >
          Delete From FavList
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;