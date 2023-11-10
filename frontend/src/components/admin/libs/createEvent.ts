import { FormEvent } from "react";
import { RegisterEvent } from "./types";

const createEvent = async (event: FormEvent) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);

  const newEvent: RegisterEvent = {
    id: formData.get("id") as string,
    title: formData.get("title") as string,
    cover_image: formData.get("cover_image") as any,
    short_description: formData.get("short_description") as string,
    content: formData.get("content") as string,
    voting_startdate: formData.get("voting_startdate") as string,
    voting_enddate: formData.get("voting_enddate") as string,
    created_at: formData.get("created_at") as string,
  };

  console.log("newEvent", newEvent);
  try {
    const query = await fetch("http://127.0.0.1:8000/api/events/create", {
      method: "POST",
      body: formData,
    });
    const response: RegisterEvent = (await query.json()) as RegisterEvent;
    console.log(response.id);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default createEvent;
