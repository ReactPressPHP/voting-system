import EventCard from "../components/EventCard";

const Events = () => {
  return (
    <div className="pt-40 flex flex-col justify-center items-center bg-white gap-5">
      <h1 className="text-5xl font-extrabold">Select an Event</h1>
      <div className=" w-1/3 flex flex-col justify-center text-center gap-5 ">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
