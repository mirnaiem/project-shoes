import { useLoaderData } from "react-router-dom";

const SeeDetails = () => {
 const data=useLoaderData()
 const {title,brand, description,photo,price}=data;
 return (
  <div className="flex justify-center items-center gap-6 w-[90%] mx-auto rounded-lg shadow-xl h-[600px] my-20 px-2">
   <img className="h-full w-1/2 rounded-xl" src={photo} alt="" />
   <div className="space-y-3 w-1/2">
   <h1 className="text-4xl font-bold">{title}</h1>
   <h1 className="text-2xl font-semibold">{brand}</h1>
   <p ><span className="font-bold text-xl">Price:</span> <span className="font-semibold text-2xl text-amber-500">${price}</span> </p>
   <p className="text-justify">{description}</p>
   <div className="flex justify-center items-center "><button className="btn bg-red-500 text-white text-xl mt-10">Buy Now</button></div>
   </div>
  </div>
 );
};

export default SeeDetails;