import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import OurProducts from "../components/OurProducts";



const Home = () => {
 const data=useLoaderData();
 return (
  <div >
  <Banner/>
  <OurProducts data={data}/>
  </div>
 );
};

export default Home;