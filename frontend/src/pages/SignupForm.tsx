import { Link } from "react-router-dom";
import Input from "../components/Input";

const SignupForm = () => {
  return (
    <div className="flex flex-col bg-base-100">
      <div className="flex flex-col items-center justify-center gap-10 pt-52">
        <h1 className="text-5xl font-extrabold normal-case text-blue-950">
          Fill out your Voter's Information
        </h1>
        <form className="flex flex-col items-center justify-center w-1/2 gap-5 ">
          <Input
            placeholder="ID  or Phone number"
            type="text"
            label="Discord Username"
          />
          <div className="flex flex-col items-center justify-center w-full  ">
            <Input
              placeholder="Password"
              type="password"
              label="Create Password"
            />
            <Input placeholder="Confirm Password" type="password" />
          </div>

          <div className="flex items-center justify-center w-3/4 text-blue-950 ">
            <label htmlFor="TAC">
              <input type="checkbox" name="TAC" className="mr-2" />I agree to
              Daedalus <span className="text-accent">Terms</span> and
              <span className="text-accent"> Privacy Policy</span>
            </label>
          </div>
        </form>

        <button className="px-10 text-white rounded-md btn bg-accent ">
          Register
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mb-24">
        {/* <Link to={"/admin-signin"} className="mt-5 font-semibold text-accent">
          Sign in as an admin
        </Link> */}
        <p className="mr-3 text-blue-950">
          Already have an account?
          <Link to="/sign-in" className="ml-1 font-semibold text-accent">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
