import { Link, useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Vote from "../pages/Vote";
import VoteModal from "../pages/voteModal";
import { useState } from "react";

type Team = {
  name: string;
  id: string;
  members: Array<{ id: string; name: string }>;
};

type TeamsProps = {
  teams: Team[];
};

const Teams: React.FC<TeamsProps> = ({ teams }) => {
  const [userData] = useLocalStorage<{ id: string }>("discordChuChu", {
    id: "",
  });
  const { event_id } = useParams<{ event_id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  return (
    <div>
      <div className="py-20 bg-base-100 flex flex-col gap-2 min-h-screen ">
        {teams.map((team: Team) => {
          return (
            <div
              key={team.id}
              className="collapse collapse-arrow  border border-accent max-w-[1024px] mx-auto mb-3 shadow-lg "
            >
              <input
                type="checkbox"
                // name="my-accordion-2"
                // defaultChecked={false}
              />
              <div className="collapse-title text-2xl font-bold text-accent">
                {team.name}
              </div>
              <div className="collapse-content">
                <p className="mb-3 font-bold text-lg text-center  ">MEMBERS</p>
                <div className="flex gap-2 flex-wrap justify-center">
                  {team.members.map((member) => {
                    return (
                      <div
                        key={member.id}
                        className="card border border-accent bg-base-100 shadow-lg mb-3 w-full md:max-w-[45%] lg:max-w-[30%]"
                      >
                        <div className="card-body flex flex-col items-center justify-center">
                          <div className="avatar">
                            <div className="w-24 rounded-full">
                              <img
                                src={`https://ui-avatars.com/api/name=${member.name}`}
                              />
                            </div>
                          </div>
                          <h2 className="card-title text-accent">
                            {member.name}
                          </h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  document.getElementById("vote_modal").showModal();
                  setFormData({
                    event_id: event_id,
                    team_id: team.id,
                    discord_id: userData.id,
                    team_name: team.name,
                  });
                }}
                className=" btn  btn-accent mx-auto my-5 rounded-xl min-w-[200px] "
              >
                VOTE
              </button>
            </div>
          );
        })}
      </div>
      <VoteModal data={formData} />
    </div>
  );
};

export default Teams;
