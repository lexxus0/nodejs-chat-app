import { PrettyChatWindow } from "react-chat-engine-pretty";
import { User } from "../App";

type ChatsPageProps = {
  user: User;
  username: string;
  secret: string;
};

const ChatsPage = (user: ChatsPageProps) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={`c3ae4812-5ccf-489f-80cc-bf0382994c25`}
        username={user.username}
        secret={user.secret}
      />
    </div>
  );
};

export default ChatsPage;
