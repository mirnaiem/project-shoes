import useAuth from "../hooks/useAuth";

const Dashboard = () => {
 const {user}=useAuth()
 return (
  <div className="flex flex-col justify-center items-center shadow-2xl w-1/2 h-1/2  rounded-2xl">
  <img className="w-1/3 rounded-full" src={user?.photoURL} alt="" />
  <h1 className="text-2xl">Name: {user?.displayName}</h1>
  <p className="text-xl">Email: {user?.email}</p>
  </div>
 );
};

export default Dashboard;