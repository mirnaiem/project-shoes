import { Link } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const {signInUser}=useAuth()
  const handleLogin=(e)=>{
    e.preventDefault()
    const form=e.target;
    const email=form.email.value;
    const password=form.pass.value;
    signInUser(email,password)
    console.log(email,password);
     }
 return (
  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col justify-evenly lg:flex-row-reverse">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <GoogleLogin/>
      </form>
      <div className="text-lg mt-3 p-4">
        <h1>Don't Have Any Account? Please <Link className="text-green-500" to="/register">Register!</Link></h1>
      </div>
    </div>
  </div>
</div>
 );
};

export default Login;