import { Link, useNavigate, useSearchParams } from "react-router-dom";
import DiscordButton from "../components/DiscordButton";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

const SigninForm = () => {
  const { handleLogin, isAuthenticated } = useAuth();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      handleLogin();
    }
  }, [code, handleLogin]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col bg-base-100">
      <div className="flex flex-col items-center justify-center gap-10 pt-52 pb-52">
        {code ? (
          <h1 className="text-5xl font-extrabold normal-case text-blue-950">
            You're signed in!
          </h1>
        ) : (
          <>
            <h1 className="text-5xl font-extrabold normal-case text-blue-950">
              Sign in with Discord
            </h1>
            <h2 className="text-blue-950">
              You must be a member of our server!
            </h2>
            <DiscordButton />
          </>
        )}
      </div>
    </div>
  );
};

export default SigninForm;
