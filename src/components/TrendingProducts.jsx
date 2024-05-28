// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleProducts from "./SingleProducts";

const TrendingProducts = () => {
 // const data =useLoaderData()
 const [products,setProducts]=useState([]);
 useEffect(()=>{
  fetch('http://localhost:3000/shoes')
  .then((res)=>res.json())
  .then((data)=>setProducts(data))
 },[])
 
 return (
  <div className="my-10"> <h1 className="text-5xl font-semibold text-center mb-10">Trending Products</h1>
  <div className="flex  flex-wrap gap-y-5 text-center justify-center gap-10 ">
  {products.slice(3,9).map(shoe => (
  <SingleProducts key={shoe.id} shoe={shoe} />
))}
  </div></div>
 );
};

export default TrendingProducts;