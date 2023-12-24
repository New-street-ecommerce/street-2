'use client'

// import { useQuery,useIsFetching } from '@tanstack/react-query';
import {  useState} from "react";
import React from 'react';
import { FaBorderAll } from "react-icons/fa6";
import { BsFilterLeft } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import { MdNewReleases } from "react-icons/md";


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
  const Sidebar = ({ isNewRelease,setNewRelease,fetchNew,setMinPrice, setMaxPrice, refetch }:any) => {
    const [isCategoryOpen, setCategoryOpen] = useState(false);
    const [isPriceFilterOpen, setPriceFilterOpen] = useState(false);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
   
  
    const toggleCategoryOptions = () => {
      setCategoryOpen(!isCategoryOpen);
    };
  
    const togglePriceFilter = () => {
      setPriceFilterOpen(!isPriceFilterOpen);
    };
  
    const applyFilter = () => {
      setMaxPrice(max);
      setMinPrice(min);
      refetch();
    };
  
    const handleNewRelease = () => {
      setNewRelease((prevIsNewRelease:any) => !prevIsNewRelease);
      
    };
  
    const fetchProductsByCategory = (category: string) => {
      setMinPrice(min);
      setMaxPrice(1000);
      setSelectedCategory(category);
      refetch();
    };
  
    const fetchAllProducts = () => {
      setMinPrice(min);
      setMaxPrice(10000);
      setNewRelease(false); // Fix the typo here
      refetch();
    };


    
  

  
    return (
      <div className="w-full md:w-64 h-screen bg-white border-r border-gray-300 flex flex-col md:flex-row">
      <div className="md:w-64 md:flex-shrink-0">
        <div className="px-4 py-3">
          <BsFilterLeft />
          <h2 className="text-2xl font-bold text-gray-800">Filter</h2>
        </div>
        <nav className="md:block hidden">
          <ul className="space-y-4 text-gray-800">
            <li>
              <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100" onClick={fetchAllProducts}>
                <FaBorderAll className="w-6 h-6" />
                <span className="ml-2">All Products</span>
              </a>
            </li>
            <br />
            <br />
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 rounded hover:bg-gray-100"
                onClick={togglePriceFilter}
              >
                <ImPriceTags className="w-6 h-6" />
                <span className="ml-2">price</span>
              </a>
              {isPriceFilterOpen && (
                <div className="p-4">
                  <div className="flex items-center space-x-4">
                    <label className="mr-2">Min Price:</label>
                    <input
                      className="border border-gray-400 px-2 py-1 w-16"
                      type="number"
                      value={min}
                      onChange={(e) => setMin(Number(e.target.value))}
                    />
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <label className="mr-2">Max Price:</label>
                    <input
                      className="border border-gray-400 px-2 py-1 w-16"
                      type="number"
                      value={max}
                      onChange={(e) => setMax(Number(e.target.value))}
                    />
                  </div>
                  <button
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => applyFilter()}
                  >
                    Apply
                  </button>
                </div>
              )}
            </li>
            <br />
            <br />
            <li>
              <a href='javascript:void(0)' className="flex items-center px-4 py-2 rounded hover:bg-gray-100" onClick={() => handleNewRelease()}>
                <MdNewReleases className="w-6 h-6" />
                <span className="ml-2">New Release</span>
              </a>
              </li>
              <br />
              <br />
              <li>
                <a href='javascript:void(0)' className="flex items-center px-4 py-2 rounded hover:bg-gray-100" onClick={toggleCategoryOptions}>
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
                      <a
                       href='javascript:void(0)'
                        className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 ${
                          selectedCategory === 'Hoodies' ? 'bg-gray-100' : ''
                        }`}
                        onClick={() => fetchProductsByCategory('Hoodies')}
                      >
                        <span className='ml-4'>Hoodies</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href='javascript:void(0)'
                        className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 ${
                          selectedCategory === 'Pants' ? 'bg-gray-100' : ''
                        }`}
                        onClick={() => fetchProductsByCategory('Pants')}
                      >
                        <span className='ml-4'>Pants</span>
                      </a>
                    </li>
                    <li>
                      <a
                       href='javascript:void(0)'
                        className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 ${
                          selectedCategory === 'Sneakers' ? 'bg-gray-100' : ''
                        }`}
                        onClick={() => fetchProductsByCategory('Sneakers')}
                      >
                        <span className='ml-4'>Sneakers</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
  
        <div className='flex-1 p-4'></div>
      </div>
    );
  };
  
  export default Sidebar;