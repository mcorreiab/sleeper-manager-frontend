import { useState } from "react";
import { UsernameInput, SubmitInput } from "../atoms";

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const UserForm: React.FC<Props> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [isUsernameMissing, setIsUsernameMissing] = useState(false);

  return (
    <form onSubmit={}>
      <UsernameInput isUsernameMissing={isUsernameMissing} />
      <SubmitInput />
    </form>
  );
};

export default UserForm;
