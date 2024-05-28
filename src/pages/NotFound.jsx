import { Link } from "react-router-dom";

const NotFound = () => {
 return (
  <div className="bg-base-200 h-screen">
  <div className="flex flex-col items-center justify-center h-full ">
   <img className="w-1/3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6WvpKSybw-5uJ-6FDJN4R4UNqT9xU7QM6RdUp9PT5Q&s" alt="" />
   <Link className="btn bg-red-400 text-white" to='/'>Home</Link>
  </div></div>
 );
};

export default NotFound;