import { Link } from "react-router-dom";

const EventCard = () => {
  return (
    <div className=" drop-shadow-md shadow-md  shadow-slate-800  rounded-lg w-full flex justify-center items-center bg-accent m-2  ">
      <p className=" p-5 text-xl text-white font-extrabold w-full">
        <Link to="/event-details">Hackathon 2023</Link>
      </p>
    </div>
  );
};

export default EventCard;
