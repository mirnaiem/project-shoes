import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import OurProducts from "../components/OurProducts";
import TrendingProducts from "../components/TrendingProducts";



const Home = () => {
 const data=useLoaderData();
 return (
  <div >
  <Banner/>
  <OurProducts data={data}/>
  <TrendingProducts/>
  </div>
 );
};

export default Home;