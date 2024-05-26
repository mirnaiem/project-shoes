import useAuth from "../hooks/useAuth";

const GoogleLogin = () => {
 const {googleLogin}=useAuth()
 const handleGoogleLogin=()=>{
  googleLogin()
 }
 return (
  <div>
   <button onClick={handleGoogleLogin} className="py-3 px-3 text-white  bg-blue-500 w-full mt-2 rounded-md">Login with Google</button>
  </div>
 );
};

export default GoogleLogin;