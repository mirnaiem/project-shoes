// import { useLoaderData } from "react-router-dom";
import SingleProducts from "./SingleProducts";
import { useEffect, useState } from "react";

const AllProducts = () => {
 // const data =useLoaderData()
 const [products,setProducts]=useState([]);
 useEffect(()=>{
  fetch('http://localhost:3000/shoes')
  .then((res)=>res.json())
  .then((data)=>setProducts(data))
 },[])
 return (
  <div className="my-10"> <h1 className="text-5xl font-semibold text-center mb-10">Our All Products</h1>
  <div className="grid grid-cols-3  gap-y-5  gap-10 w-[95%] mx-auto ">
  {products.map(shoe => (
  <SingleProducts key={shoe.id} shoe={shoe} />
))}
  </div></div>
 );
};

export default AllProducts;