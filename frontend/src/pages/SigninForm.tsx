import { useLocation, useNavigate } from "react-router-dom";
import DiscordButton from "../components/DiscordButton";
import { useEffect, useState } from "react";

const SigninForm = () => {
  const url = useLocation();
  const navigate = useNavigate();
  const [id, setID] = useState("");

  useEffect(() => {
    if (url.hash.length > 0) {
      const tokens = url.hash.split("=")[2];
      const end = tokens.split("&")[0];
      fetch("https://discord.com/api/users/@me", {
        headers: {
          authorization: `Bearer ${end}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          let updatedData = { ...data, vote: "" };
          console.log("updatedData", updatedData);
          localStorage.setItem("discordChuChu", JSON.stringify(updatedData));
          setID(data.id);
        })
        .then(() => {
          navigate("/");
        });
    }
  }, [url]);

  return (
    <div className="flex flex-col bg-base-100">
      <div className="flex flex-col items-center justify-center gap-10 pt-52 pb-52">
        {id ? (
          <h1 className="text-5xl font-extrabold normal-case text-blue-950">
            You're connected!
          </h1>
        ) : (
          <>
            <h1 className="text-5xl font-extrabold normal-case text-blue-950">
              Connect to Discord
            </h1>
            <h2 className="px-5 py-2 transition-colors duration-300 rounded-sm text-blue-950 hover:bg-black/10">
              <a href="https://discord.gg/daedalusdev" target="_blank">
                You must be a member of our server!
              </a>
            </h2>
            <DiscordButton />
          </>
        )}
      </div>
    </div>
  );
};

export default SigninForm;
