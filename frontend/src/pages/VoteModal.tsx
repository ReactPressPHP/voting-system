import { useState } from "react";
import { voteForTeam } from "../libs/api/api";
import vote from "../components/admin/libs/vote";

const VoteModal = ({ data }) => {
  const [range, setRange] = useState("1");
  const [response, setResponse] = useState();
  const handleRangeChange = (event) => {
    setRange(event.target.value);
  };
  let errorTextColor;

  return (
    <dialog id="vote_modal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <div className="py-5 text-center">
          <span
            className={
              response?.status < 300 ? "text-green-600" : "text-red-600"
            }
          >
            {response?.error}
          </span>
        </div>
        <h3 className="font-bold text-lg mb-5">
          Vote for team: {data.team_name}?
        </h3>
        <form
          onSubmit={async (event) => {
            const data = await vote(event);

            console.log(data);
            setResponse(data);
            if (data.id) {
              (event.target as HTMLFormElement).reset();
            }
          }}
        >
          <input type="hidden" name="discord_id" value={data.discord_id} />
          <input type="hidden" name="event_id" value={data.event_id} />
          <input type="hidden" name="team_id" value={data.team_id} />

          <input
            type="range"
            min={0}
            max="5"
            defaultValue={range}
            onChange={handleRangeChange}
            className="range range-success"
          />
          <p>Score: {range} </p>
          <button className="btn btn-accent mt-10 flex mx-auto rounded-md">
            submit
          </button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default VoteModal;
