import { Link } from "react-router-dom";
import { RegisterEvent } from "./admin/libs/types";
interface EventCardProps {
  listOfEvents: RegisterEvent;
}
const EventCard: React.FC<EventCardProps> = ({ listOfEvents }) => {
  return (
    <>
      {listOfEvents.items.map((item: RegisterEvent) => {
        return (
          <Link
            to={`/event-details/${item.id}`}
            className=" drop-shadow-md shadow-md flex-col  shadow-slate-800  rounded-lg w-full flex justify-center items-center bg-accent m-2  "
          >
            {/* <p className=" p-5 text-xl text-white font-extrabold w-full"> */}
            <div className=" pt-2 text-xl text-white font-extrabold w-full">
              {item.title}
            </div>
            <p>{item.short_description}</p>
            <div className="flex w-full flex-row justify-between px-5">
              <p>Voting start: {item.voting_startdate}</p>
              <p>Voting end: {item.voting_enddate}</p>
            </div>
          </Link>
        );
      })}
      ;
    </>
  );
};

export default EventCard;
