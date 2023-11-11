import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { getListofEvents } from "../libs/api/api";
import { RegisterEvent } from "../components/admin/libs/types";

const Events = () => {
  const [listOfEvents, setListOfEvents] = useState<RegisterEvent>();
  const fetchListOfEvents = async () => {
    let value = await getListofEvents();
    console.log("value", value);
    setListOfEvents(value);
    return value;
  };
  useEffect(() => {
    fetchListOfEvents();
  }, []);

  return (
    <div className="pt-40 flex flex-col justify-center items-center bg-white gap-5">
      <h1 className="text-5xl font-extrabold">Select an Event</h1>
      <div className=" w-1/2 flex flex-col justify-center text-center gap-5 ">
        {listOfEvents && <EventCard listOfEvents={listOfEvents} />}
      </div>
    </div>
  );
};

export default Events;
