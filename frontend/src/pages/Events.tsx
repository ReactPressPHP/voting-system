import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { getListofEvents } from "../libs/api/api";
import { RegisterEvent } from "../components/admin/libs/types";

const Events = () => {
  const [listOfEvents, setListOfEvents] = useState<RegisterEvent>();
  const fetchListOfEvents = async () => {
    let eventList = await getListofEvents();
    console.log("eventList", eventList);
    setListOfEvents(eventList);
    return eventList;
  };
  useEffect(() => {
    fetchListOfEvents();
  }, []);

  return (
    <div className="pt-40 flex flex-col justify-center items-center bg-white gap-5 min-h-screen">
      <h1 className="text-5xl font-extrabold drop-shadow-md shadow-md flex justify-center items-center p-10 w-3/6 shadow-slate-800  rounded-lg  bg-accent font-white text-white">
        Events
      </h1>
      <div className=" w-1/2 flex flex-col justify-center text-center gap-5 ">
        {listOfEvents && <EventCard listOfEvents={listOfEvents} />}
      </div>
    </div>
  );
};

export default Events;
