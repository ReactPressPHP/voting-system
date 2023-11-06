import Lottie from "lottie-react";

import heroAnimation from "../assets/tech-2.json";
export default function Hero() {
  return (
    <div className="bg-white hero min-h-[calc(100vh-15rem)]">
      <div className="flex-col lg:gap-60 max-w-[100rem] hero-content lg:flex-row-reverse">
        <Lottie
          className="lg:w-full md:w-[30rem] sm:w-[25rem]"
          animationData={heroAnimation}
        />
        <div className="flex flex-col lg:pl-20 lg:items-start sm:items-center">
          <h1 className="text-5xl font-black">Voting System</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="text-white btn bg-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
}
