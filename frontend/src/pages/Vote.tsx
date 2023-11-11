import { useParams } from "react-router-dom";

const Vote = () => {
  const { event_id, team_id } = useParams<{
    event_id: string;
    team_id: string;
  }>();

  console.log(event_id, team_id);
  return (
    <div className="pt-40  ">
      <form>
        <input
          type="number"
          min="1"
          max="5"
          name="score"
          placeholder="enter score"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Vote;
