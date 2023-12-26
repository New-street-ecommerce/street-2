'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Sidebar from './sidebar';
import { FcLikePlaceholder } from 'react-icons/fc';
import { FcLike } from 'react-icons/fc';

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
  const [minPrice, setMinPrice] = useState<number | string>(0);
  const [maxPrice, setMaxPrice] = useState<number | string>(1000);
  const [ProdFilter, setFilteredProducts] = useState(false);
  const [isNewRelease, setNewRelease] = useState();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [category, setCategory] = useState("")
  const { data: newRelease, isError: rr, isLoading: load } = useQuery<Product[]>({
    queryKey: ["new", isNewRelease],
    queryFn: () =>
      fetch(`http://localhost:5000/product/New?isNew=${isNewRelease}`).then(
        (res) => res.json()
      ),
  });



  const { data: products, refetch, isError, isLoading } = useQuery<Product[]>({
    queryKey: ['products', minPrice, maxPrice],
    queryFn: () =>
      fetch(`http://localhost:5000/product/${minPrice}/${maxPrice}${category}`).then((res) =>
        res.json()
      ),
  });

  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  useEffect(() => {
    refetch();
  }, [newRelease, rr, load, category]);

  const handleLikeClick = (productId: number) => {
    const isLiked = likedProducts.includes(productId);
    const updatedLikedProducts = isLiked
      ? likedProducts.filter((id) => id !== productId)
      : [...likedProducts, productId];
  
    setLikedProducts(updatedLikedProducts);
  }
  
  const handleProductClick = (productId: number) => {
    const selected =
      newRelease?.find((product) => product.id === productId) ||
      products?.find((product) => product.id === productId);
  
    if (selected) {
      setSelectedProduct(selected);
      setSelectedImageIndex(selected.pictures.length > 0 ? 0 : -1);
    }
  }
  

  const handleNextImage = () => {
    if (selectedProduct) {
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % selectedProduct.pictures.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProduct) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProduct.pictures.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className='flex '>
     
      <Sidebar category={category} setCategory={setCategory} isNewRelease={isNewRelease} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} refetch={refetch} minPrice={minPrice} maxPrice={maxPrice} setNewRelease={setNewRelease} />
     <p className='mr-[-70px] underline underline-offset-4 text-slate-400 font-light text-4xl '>
      products
      </p> 
      <div className='container mx-auto p-4 lg:h-screen flex items-center justify-center mt-[60px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px]'>
       
        {isNewRelease &&
  newRelease?.map((newProduct) => (
    <div
      key={newProduct.id}
      className='w-full max-w-md mx-auto mt- relative shadow-md rounded-lg cursor-pointer overflow-hidden group mb-4 p-4' // Add padding to the whole card
    >
      <div className='relative overflow-hidden group-hover:scale-110 transition-transform duration-300'>
        <img
          src={newProduct.pictures[0]}
          alt={newProduct.name}
          className='w-[300px] h-[400px] object-cover rounded-lg'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-5 backdrop-blur text-white p-3 rounded-b-lg'>
        <h1 className='text-2xl font-semibold cursor-pointer' onClick={() => handleProductClick(newProduct.id)}>
          {newProduct.name}
        </h1>
        <div
          className='mt-2 ml-2 cursor-pointer'
          onClick={() => handleLikeClick(newProduct.id)}
        >
          {likedProducts.some(id => id === newProduct.id) ? <FcLike /> : <FcLikePlaceholder />}
        </div>

        <p className='mt-2 font-light font-semibold text-2xl italic text-black'>{newProduct.category}</p>
        <p className='mt-2 text-xl font-bold text-pink-900'>
          ${newProduct.price}
        </p>
        <button className='mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-pink-900'>
          Buy
        </button>
      </div>
    </div>
  ))} 
          {!isNewRelease &&
            Array.isArray(products) &&
            products.map((product: Product, index: number) => (
              <div
                key={index}
                className='w-full max-w-sm mx-auto mb-10  mt-[-10px]  relative shadow-md rounded-lg cursor-pointer overflow-hidden group'
              >
                <div className='relative overflow-hidden group-hover:scale-110 transition-transform duration-300'>
                  <img
                    src={product.pictures[0]}
                    alt={product.name}
                    className='w-full h-65 object-cover rounded-lg'
                  />
                  <div className='absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 h-30 bg-black bg-opacity-5 backdrop-blur text-white p-3 rounded-b-lg'>
                  <h1 className='text-2xl font-semibold cursor-pointer' >
                    {product.name}
                  </h1>
                  <div
                    className='mt-[-20px] ml-[300px] cursor-pointer'
                    onClick={() => handleLikeClick(product.id)}
                  >
                    {likedProducts.some(id => id === product.id) ? <FcLike /> : <FcLikePlaceholder />}
                  </div>

                  <br />
                  <p className='mt-2 font-light font-semibold text-2xl italic text-black'>{product.category}</p>
                  <p className='mt-[-330px] ml-[300px] mb-[100px] text-xl font-bold text-pink-900' onClick={() => handleProductClick(product.id)}>
                    ${product.price}
                  </p>
                  <br />
                  <button className='mt-[150px] bg-blue-500 text-white py-2 px-4 rounded hover:bg-pink-900 ml-[150px]'>
                    Buy
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      {selectedProduct && selectedImageIndex !== -1 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="p-4 rounded-md max-w-md relative">
            <button
              className="absolute top-2 right-2 text-red"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
            <h2 className="text-2xl font-semibold mb-4">{selectedProduct.name}</h2>
            <div className="relative group">
              <img
                src={selectedProduct.pictures[selectedImageIndex]}
                alt={`Product ${selectedImageIndex + 1}`}
                className="w-100 h-100 object-cover rounded-md transition-transform transform-gpu group-hover:scale-150"
              />
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-xl bg-gray-800 rounded-full p-2"
                onClick={handleNextImage}
              >
                {'>'}
              </button>
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-xl bg-gray-800 rounded-full p-2"
                onClick={handlePrevImage}
              >
                {'<'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;