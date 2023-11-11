import { RegisterEvent } from "../../components/admin/libs/types";

export const getListofEvents = async () => {
  try {
    const query = await fetch("http://127.0.0.1:8000/api/events", {
      method: "GET",
      headers: { formData: "formData" },
    });
    const response: RegisterEvent = (await query.json()) as RegisterEvent;
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getSingleEvent = async (id: string) => {
  try {
    const query = await fetch(`http://127.0.0.1:8000/api/events/${id}`, {
      method: "GET",
      headers: { formData: "formData" },
    });
    const response: RegisterEvent = (await query.json()) as RegisterEvent;
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getSingleTeam = async (event_id: string, team_id: string) => {
  try {
    const query = await fetch(
      `http://127.0.0.1:8000/api/teams/${event_id}/${team_id}`,
      {
        method: "GET",
        headers: { formData: "formData" },
      }
    );
    const response = await query.json();
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getListofTeams = async (event_id: string) => {
  try {
    const query = await fetch(`http://127.0.0.1:8000/api/teams/${event_id}`, {
      method: "GET",
      headers: { formData: "formData" },
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const voteForTeam = async () => {
  try {
    const query = await fetch("http://127.0.0.1:8000/api/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        discord_id: "",
        event_id: "",
        score: "",
        name: "",
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
