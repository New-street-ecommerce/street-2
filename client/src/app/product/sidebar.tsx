'use client'

import { useQuery,useIsFetching } from '@tanstack/react-query';
import {  useState} from "react";
import React from 'react';


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
  const Sidebar: React.FC = () => {
    const [isCategoryOpen, setCategoryOpen] = useState(false);
    const [isPriceFilterOpen, setPriceFilterOpen] = useState(false);
    const [minPrice, setMinPrice] = useState<number | string>('');
    const [maxPrice, setMaxPrice] = useState<number | string>('');
  
    const { data: filteredProducts, refetch } = useQuery<Product[]>({
      queryKey: ['products', minPrice, maxPrice],
      queryFn: () =>
        fetch(`http://localhost:5000/product/${minPrice}/${maxPrice}`).then((res) =>
          res.json()
        ),
    });
  

    const { data: newReleaseProducts } = useQuery<Product[]>({
      queryKey: ['newReleaseProducts'],
      queryFn: () =>
        fetch(`http://localhost:5000/product/new-releases`).then((res) =>
          res.json()
        ),
    });
    const toggleCategoryOptions = () => {
      setCategoryOpen(!isCategoryOpen);
    };
  
    const togglePriceFilter = () => {
      setPriceFilterOpen(!isPriceFilterOpen);
    };
  
    const applyFilter = () => {
      refetch();
    };
  
    return (
      <div className="w-64 h-screen bg-white border-r border-gray-300">
        <div className="px-6 py-4">s
          <h2 className="text-2xl font-bold text-gray-800">Filter</h2>
        </div>
        <br />
        <br />
        <div className="flex flex-col justify-between h-full">
          <nav>
            <ul className="space-y-4 text-gray-800">
              <li>
                <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
                  <svg className="w-6 h-6"></svg>
                  <span className="ml-4">All Products</span>
                </a>
              </li>
              <br />
              <br />
              <li>
                <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100" onClick={togglePriceFilter}>
                  <svg className="w-6 h-6"></svg>
                  <span className="ml-4">price</span>
                </a>
                {isPriceFilterOpen && (
                  <div>
                    <div className="flex items-center px-4 py-2">
                      <label className="mr-2">Min Price:</label>
                      <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center px-4 py-2">
                      <label className="mr-2">Max Price:</label>
                      <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                    </div>
                    <button onClick={applyFilter}>Apply</button>
                  </div>
                )}
              </li>
              <br />
              <br />
              <li>
              <a
          href="#"
          className="flex items-center px-4 py-2 rounded hover:bg-gray-100"
          onClick={() => refetch({ isNew: true })}
        >
          <svg className="w-6 h-6"></svg>
          <span className="ml-4">New Release</span>
        </a>
              </li>
              <br />
              <br />
              <li>
                <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100" onClick={toggleCategoryOptions}>
                  <svg className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    ></path>
                  </svg>
                  <span className="ml-4">Category</span>
                </a>
                {isCategoryOpen && (
                  <ul>
                    <li>
                      <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
                        <span className="ml-4">Hoodies</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
                        <span className="ml-4">Pants</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
                        <span className="ml-4">Sneakers</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
  
        {/* Display filtered products */}
        {filteredProducts && (
          <div>
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                {/* Render other product details as needed */}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Sidebar;