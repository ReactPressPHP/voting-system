import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListofTeams } from "../libs/api/api";
import Teams from "../components/Teams";

const EventParticipants = () => {
  const { event_id } = useParams<{ event_id: string }>();
  const [teams, setTeams] = useState([]);

  console.log(event_id);
  const fetchTeams = async () => {
    let listofTeams = await getListofTeams(event_id ?? "");
    setTeams(listofTeams);
    return listofTeams;
  };
  useEffect(() => {
    fetchTeams();
  }, []);
  console.log(teams);
  return (
    <>
      <div className="pt-20 text-center text-6xl bg-white font-bold">
        Hackathon Teams
      </div>
      <Teams teams={teams} />
    </>
  );
};

export default EventParticipants;
