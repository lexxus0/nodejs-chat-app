import { useState } from "react";

import "./App.css";

import AuthPage from "./pages/AuthPage";
import ChatsPage from "./pages/ChatsPage";

export type User = {
  username: string;
  secret: string;
};

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} username={""} secret={""} />;
  }
}

export default App;
