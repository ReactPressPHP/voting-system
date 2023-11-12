import Lottie from "lottie-react";
import heroAnimation from "../assets/tech-2.json";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";

export default function Hero() {
  const [data] = useLocalStorage<{ id: string }>("discordChuChu", { id: "" });
  const [isMember, setIsMember] = useState(false);
  const navigate = useNavigate();

  console.log(isMember);

  useEffect(() => {
    if (data.id) {
      fetch(`http://localhost:7000/api/${data.id}`)
        .then((res) => res.json())
        .then((data) => {
          setIsMember(data.is_member);
        });
    }
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
            Dive into a world of dynamic voting on our cutting-edge platform!
            Whether you're a casual observer or a dedicated voter, we offer a
            unique experience. Explore upcoming events, discover talented
            participants, and check real-time voting stats. To cast your vote,
            join our exclusive Discord server – your gateway to decision-making.
            <br></br> <br></br>
            Join us in shaping unforgettable moments. Every vote counts towards
            celebrating talent, community, and shared enthusiasm. Let's make
            every event a memorable celebration together!
          </p>
          <Link
            to="/events"
            // onClick={() => navigate(isMember ? "/events" : "/sign-in")}
            // }
            className=" btn hover:bg-white text-cyan-50 hover:border-accent hover:text-black bg-accent"
          >
            View Events
          </Link>
          {/* {isMember && <Link to="/events">VOTE</Link>} */}
        </div>
      </div>
    </div>
  );
}
