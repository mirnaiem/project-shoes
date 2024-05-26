import SingleProducts from "./SingleProducts";


const OurProducts = () => {
 return (
<div className="mt-5"> <h1>our products</h1>
  <div className="flex gap-4 text-center justify-around ">
<SingleProducts/>
<SingleProducts/>
<SingleProducts/>

  </div></div>
 );
};

export default OurProducts;