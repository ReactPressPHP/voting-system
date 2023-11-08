import Lottie from "lottie-react";
import heroAnimation from "../assets/tech-2.json";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";

export default function Hero() {
  const [data] = useLocalStorage("discordChuChu", "");
  const [isMember, setIsMember] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:7000/api/${data.id}`)
      .then((res) => res.json())
      .then((data) => {
        setIsMember(data.is_member);
      });
  }, [data]);
  return (
    <div className="bg-white hero min-h-[calc(100vh)]">
      <div className="flex-col lg:gap-60 max-w-[100rem] hero-content lg:flex-row-reverse">
        <Lottie
          className="md:w-[30rem] sm:w-[25rem] lg:w-full"
          animationData={heroAnimation}
        />
        <div className="flex flex-col lg:pl-20 lg:items-start sm:items-center">
          <h1 className="text-5xl font-extrabold text-blue-950">
            Voting System
          </h1>
          <p className="py-6 text-blue-950 lg:px-0 sm:px-32 sm:text-center lg:text-left">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="text-white btn bg-accent hover:bg-second"
          >
            GET STARTED
          </button>
          {isMember && <button>VOTE</button>}
        </div>
      </div>
    </div>
  );
}
