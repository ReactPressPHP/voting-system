import { Link } from "react-router-dom";
import Input from "../../components/Input";

const SigninForm = () => {
  return (
    <div className="flex flex-col bg-base-100 ">
      <div className="flex flex-col gap-10 pt-52 justify-center items-center">
        <h1 className="text-5xl normal-case font-extrabold">WELCOME</h1>
        <form className="flex flex-col gap-10 w-1/2 justify-center items-center ">
          <Input placeholder="ID  or Phone number" type="text" />
          <Input placeholder="Password" type="password" />
          <div className="flex w-3/4 justify-between items-center text-accent ">
            <label htmlFor="remember">
              <input type="checkbox" name="remember" className="mr-2" />
              Remember Password
            </label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </form>

        <button className="text-white btn bg-accent px-10 rounded-md ">
          Login
        </button>
      </div>
      <div className="flex flex-col gap-5   justify-center items-center">
        <Link to={"/admin-signin"} className=" text-accent font-semibold mt-5">
          Sign in as an admin
        </Link>
        <p className="mr-3">
          Don't have an account?
          <Link to="/sign-up" className=" text-accent font-semibold  ml-1">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;
