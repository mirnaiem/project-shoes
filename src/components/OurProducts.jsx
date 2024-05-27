/* eslint-disable react/prop-types */
import SingleProducts from "./SingleProducts";


// eslint-disable-next-line react/prop-types
const OurProducts = ({data}) => {
console.log(data);
 return (
<div className="my-10"> <h1 className="text-5xl font-semibold text-center mb-10">our products</h1>
  <div className="flex  flex-wrap gap-y-5 text-center justify-center gap-10 ">
  {data.slice(0,6).map(shoe => (
  <SingleProducts key={shoe.id} shoe={shoe} />
))}
  </div></div>
 );
};

export default OurProducts;