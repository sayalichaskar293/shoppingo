import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Product from './Product';
import { popularProducts } from '../data';
import axios from "axios"

const Container= styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
`;


const Products = ({cat, filters, sort}) => {
  console.log(cat, filters, sort)
  const [products, setProducts]= useState([])
  const [filteredProducts, setfilteredProducts]= useState([])

useEffect(()=>{
  const getProducts= async ()=>{
    try{
      const res= await axios.get("http://localhost:5000/api/product")
      console.log(res)
    }
 
    catch(err){

    }
  }
  getProducts();
},[cat])

  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}></Product>
        ))}
    </Container>
  )
}

export default Products