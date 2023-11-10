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
    <div className="form-control">
      <label className="font-bold mb-2 text-center">Team Selection</label>
      <div className="flex flex-row w-full gap-1">
        <div className="bg-neutral-100 border border-accent p-2 w-full max-w-[50%]">
          <h1 className="border-b-4 border-black p-2">Available Teams:</h1>
          <ul className="h-[200px] overflow-auto">
            {availableTeams.map((team) => (
              <li
                key={team}
                onClick={() => handleTeamSelect(team)}
                className="cursor-pointer hover:bg-neutral-200 text-center p-2 border border-neutral-300"
              >
                {team}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-neutral-100 border border-accent p-2 w-full max-w-[50%]">
          <h1 className="border-b-4 border-black p-2">Selected Teams:</h1>
          {selectedTeams.length > 0 && (
            <ul className="h-[200px] overflow-auto">
              {selectedTeams.map((team) => (
                <li
                  key={team}
                  className="cursor-pointer hover:bg-neutral-200 text-center p-2 border border-neutral-300"
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
