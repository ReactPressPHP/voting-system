import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { RegisterEvent } from "../components/admin/libs/types";
import { getSingleEvent } from "../libs/api/api";

const EventsDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<RegisterEvent>();

  const fetchEvent = async () => {
    if (id) {
      let value = await getSingleEvent(id);
      setEvent(value);
      return event;
    }
  };
  useEffect(() => {
    fetchEvent();
  }, []);
  console.log(event);
  console.log("event_id", id);
  return (
    <div className="pt-20 flex flex-col justify-center items-center bg-slate-50 w-full gap-10 pb-10">
      <h1 className=" drop-shadow-md shadow-md  shadow-slate-800  rounded-lg text-5xl font-extrabold bg-accent font-white text-white p-10 w-3/6 flex justify-center items-center">
        {event?.title}
      </h1>
      <div className="bg-white w-3/6 px-10 py-5 flex flex-col gap-5 drop-shadow-md shadow-md  shadow-slate-800  rounded-lg">
        <h2 className="text-2xl font-bold">Details:</h2>
        <p>{event?.content}</p>
        <p className="text-2xl font-bold">
          Voting start: {event?.voting_startdate}
        </p>
        <p className="text-2xl font-bold">
          Voting end: {event?.voting_enddate}
        </p>
      </div>
      <Link
        to={`/view-participants/${event?.id}`}
        className="p-5 rounded-xl font-bold hover:bg-white hover:text-black hover:border-accent hover:border-2 bg-black text-white border-2"
      >
        View Participants
      </Link>
    </div>
  );
};

export default EventsDetails;
