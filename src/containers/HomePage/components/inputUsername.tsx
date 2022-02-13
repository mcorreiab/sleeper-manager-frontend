import { ChangeEvent, FormEvent } from "react";
import classnames from "classnames";

interface Props {
  className?: string;
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  username: string;
  onChangeUsername: (event: ChangeEvent<HTMLInputElement>) => void;
  isUsernameMissing?: boolean;
  isUsernameInvalid?: boolean;
}

const goInputStyles = `bg-sm-orange rounded-lg w-full h-auto py-3 px-4 
        text-base border-0 text-white font-bold outline-none`;
const insertUsernameStyles = `block w-full py-3 px-4 rounded-lg text-base border 
  border-solid border-[#2E2E2E] text-black outline-none
  focus:border-2 focus:border-[#0073cd] invalid:border-[#e30202]`;

const InputUsername: React.FC<Props> = ({
  className,
  onFormSubmit,
  username,
  onChangeUsername,
  isUsernameMissing = false,
  isUsernameInvalid = false,
}) => (
  <div className={className}>
    <form onSubmit={onFormSubmit}>
      <input
        className={insertUsernameStyles}
        placeholder="Insert your username here"
        value={username}
        onChange={onChangeUsername}
        required={isUsernameMissing}
        type="text"
      />
      <p className={`text-[#e30202] pl-4 mb-4 mt-1`}>
        {getUsernameMissingText(isUsernameMissing, isUsernameInvalid)}
      </p>
      <input className={goInputStyles} type="submit" value="GO" />
    </form>
  </div>
);

function getUsernameMissingText(
  usernameMissing: boolean,
  usernameInvalid: boolean
): string | null {
  if (usernameMissing) {
    return "Should inform an username";
  }

  if (usernameInvalid) {
    return "User not found";
  }

  return null;
}

export default InputUsername;
