import { User } from "../App";
import { FormEvent } from "react";
import axios from "axios";

type AuthPageProps = {
  onAuth: (user: User) => void;
};

const AuthPage: React.FC<AuthPageProps> = ({ onAuth }) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { value } = (e.target as HTMLFormElement)[0] as HTMLInputElement;
    axios
      .post("http://localhost:3000/authenticate", { username: value })
      .then((res) => onAuth({ ...res.data, secret: value }))
      .catch((e) => console.log("Auth error", e));
    onAuth({ username: value, secret: value });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
