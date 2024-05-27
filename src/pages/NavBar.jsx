import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const {user,logOut}=useAuth();
  const handleLogOut=async ()=>{
    await logOut()
  }
 return (
  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        <li className="text-xl"><Link to='/'>Home</Link></li>
        <li className="text-xl">
        <Link to='dashboard'>Dashboard</Link>
          
        </li>
        <li className="text-xl"><Link to="/about">About US</Link></li>
      </ul>
    </div>
    <img className="w-1/4 h-14" src="https://i.pinimg.com/736x/dc/53/50/dc5350243970437d9fff2c8db3a9975b.jpg" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-5 items-center">
    <li className="text-xl"><Link to='/'>Home</Link></li>
        <li className="text-xl">
        <Link to='dashboard'>Dashboard</Link>
          
        </li>
        <li className="text-xl"><Link to="/about">About US</Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-3">
  {
          user ? <>
            {user && user.photoURL ? (
              <img className="rounded-full me-2 w-10" title={user?.displayName} src={user?.
                photoURL} />
            ) : (
              <span title={user?.displayName} className="text-lg font-bold">{user?.displayName}</span>
            )
            }
            <button onClick={handleLogOut}  className="btn bg-red-400 text-lg text-white">LogOut</button></>: <div>
    <Link to="/login" className="btn bg-[#01cf87] text-lg text-white">Login</Link>
    </div>}
  </div>
  
</div>
 );
};

export default NavBar;