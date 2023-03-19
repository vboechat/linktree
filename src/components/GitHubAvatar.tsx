import { Avatar } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const GitHubAvatar = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/vboechat")
      .then((response) => response.json())
      .then((data) => setUserData(data["avatar_url"]));
  }, []);

  return (
    <Avatar
      size="2xl"
      marginTop={8}
      name="Victor Ribeiro Boechat"
      src={userData}
    />
  );
};

export default GitHubAvatar;
