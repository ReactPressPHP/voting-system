import Lottie from "lottie-react";
import heroAnimation from "../assets/tech-2.json";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Hero() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="bg-white hero min-h-[calc(100vh-270px)]">
      <div className="flex-col lg:gap-60 max-w-[100rem] hero-content lg:flex-row-reverse">
        <Lottie
          className="lg:w-[75rem] md:w-[30rem] sm:w-[25rem]"
          animationData={heroAnimation}
        />
        <div className="flex flex-col lg:pl-20 lg:items-start sm:items-center">
          <h1 className="text-5xl font-black text-blue-950">Voting System</h1>
          <p className="py-6 text-blue-950 lg:px-0 sm:px-32 sm:text-center lg:text-left">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            onClick={() => navigate(isAuthenticated ? "/app" : "/sign-in")}
            className="text-white btn bg-accent hover:bg-second"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}
