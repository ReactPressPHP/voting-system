import { Link } from "react-router-dom";

const EventsDetails = () => {
  return (
    <div className="pt-20 flex flex-col justify-center items-center bg-slate-50 w-full gap-10 pb-10">
      <h1 className=" drop-shadow-md shadow-md  shadow-slate-800  rounded-lg text-5xl font-extrabold bg-accent font-white text-white p-10 w-3/6 flex justify-center items-center">
        Hackathon 2023
      </h1>
      <div className="bg-white w-3/6 px-10 py-5 flex flex-col gap-5 drop-shadow-md shadow-md  shadow-slate-800  rounded-lg">
        <h2 className="text-2xl font-bold">Details:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore, eaque. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Harum, repellendus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Inventore, eaque.
        </p>
        <p className="text-2xl font-bold">Voting Opening Date: 01/01/2023</p>
        <p className="text-2xl font-bold">Voting Closing Date: 01/01/2023</p>
      </div>
      <Link
        to="/view-participants"
        className="p-5 rounded-xl font-bold hover:bg-white hover:text-black hover:border-accent hover:border-2 bg-black text-white border-2"
      >
        View Participants
      </Link>
    </div>
  );
};

export default EventsDetails;
