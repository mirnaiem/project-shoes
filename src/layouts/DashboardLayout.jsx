import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
 return (
  <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    
    <Outlet/>
    
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-indigo-700 text-base-content">
      {/* Sidebar content here */}
      <img className="rounded-full my-14 " src="" alt="this is image" />
      <li className="text-center text-xl text-white hover:bg-slate-400 hover:rounded-lg "><Link  to='/'>Home</Link></li>
      <li className="text-center text-xl text-white hover:bg-slate-400 hover:rounded-lg  "><Link to='/about'>About</Link></li>
    </ul>
  
  </div>
</div>
 );
};

export default DashboardLayout;