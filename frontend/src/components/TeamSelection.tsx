import { useState } from "react";

const TeamSelection = () => {
  const initialTeams = [
    "Team A",
    "Team B",
    "Team C",
    "TEAM D",
    "TEAM E",
    "TEAM F",
  ];

  const [availableTeams, setAvailableTeams] = useState(initialTeams);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);

  const handleTeamSelect = (selectedTeam: string) => {
    const updatedAvailableTeams = availableTeams.filter(
      (team) => team !== selectedTeam
    );
    setAvailableTeams(updatedAvailableTeams);

    setSelectedTeams((prevSelectedTeams) => [
      ...prevSelectedTeams,
      selectedTeam,
    ]);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2>Team Selection</h2>
      <div className=" flex flex-row gap-2  ">
        <div className="bg-accent text-white border-2  border-black   overflow-scroll">
          <h1 className="border-b-4 border-black">Available Teams:</h1>
          <ul>
            {availableTeams.map((team) => (
              <li
                key={team}
                onClick={() => handleTeamSelect(team)}
                className="hover:cursor-pointer hover:bg-white border-b-2 border-black hover:text-black flex flex-col justify-center items-center "
              >
                {team}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-accent text-white border-2 border-black overflow-scroll">
          <h1 className="border-b-4 border-black">Selected Teams:</h1>
          {selectedTeams.length > 0 && (
            <ul>
              {selectedTeams.map((team) => (
                <li
                  key={team}
                  className="hover:cursor-pointer hover:bg-white border-b-2 border-black hover:text-black flex flex-col justify-center items-center "
                >
                  {team}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamSelection;
