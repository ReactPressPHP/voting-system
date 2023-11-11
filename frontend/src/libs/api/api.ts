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
