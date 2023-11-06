import { Link } from "react-router-dom";
import Input from "../components/Input";

const SigninForm = () => {
  return (
    <div className="flex flex-col bg-base-100">
      <div className="flex flex-col items-center justify-center gap-10 pt-52">
        <h1 className="text-5xl font-extrabold normal-case text-blue-950">
          WELCOME
        </h1>
        <form className="flex flex-col items-center justify-center w-1/2 gap-10 ">
          <Input placeholder="ID  or Phone number" type="text" />
          <Input placeholder="Password" type="password" />
          <div className="flex items-center justify-between w-3/4 text-accent ">
            <label htmlFor="remember">
              <input type="checkbox" name="remember" className="mr-2" />
              Remember Password
            </label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </form>

        <button className="px-10 text-white rounded-md btn bg-accent ">
          Login
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mb-24">
        {/* <Link to={"/admin-signin"} className="mt-5 font-semibold text-accent">
          Sign in as an admin
        </Link> */}
        <p className="mr-3 text-blue-950">
          Don't have an account?
          <Link to="/sign-up" className="ml-1 font-semibold text-accent">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;
