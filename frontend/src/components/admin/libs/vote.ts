import { FormEvent } from "react";

const vote = async (event: FormEvent) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);

  const newVote = {
    discord_id: formData.get("discord_id") as string,
    event_id: formData.get("event_id") as string,
    team_id: formData.get("team_id") as string,
    score: formData.get("score") as string,
  };
  try {
    const query = await fetch("https://tester.devpapi.online/api/vote", {
      method: "POST",
      body: formData,
    });

    const response = await query.json();
    response.status = query.status;
    console.log(response);
    console.log(query.status);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default vote;
