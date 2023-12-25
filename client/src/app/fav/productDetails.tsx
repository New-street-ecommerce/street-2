"use client"
import React from 'react'

const ProductDetails = (props: any) => {
    console.log(props.data.Product)
  return (
    <div>
        <h1>{props.data.Product.name}</h1>
        <img src={props.data.Product.pictures[0]} className=' h-20' alt="" />
        <button className=''>Delete From FavList</button>
    </div>
  )
}

export default ProductDetails