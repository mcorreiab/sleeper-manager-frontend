import classnames from "classnames";

interface Props {
  isUsernameMissing?: boolean;
  isUsernameInvalid?: boolean;
  username: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UsernameInput: React.FC<Props> = ({
  isUsernameMissing = false,
  isUsernameInvalid = false,
  onChange,
  username,
}) => {
  const borderFocusStyle =
    "focus:border-2 focus:border-solid focus:border-[#0073cd]";
  const borderStyle =
    "rounded-lg border border-solid border-[#2E2E2E] outline-none";
  const defaulStyle = `block w-full py-3 px-4 text-base ${borderStyle} ${borderFocusStyle}`;

  return (
    <>
      <input
        className={classnames(defaulStyle, {
          "border-[#e30202]": isUsernameMissing,
        })}
        placeholder="Insert your username here"
        value={username}
        onChange={onChange}
      />
      <p className="text-[#e30202] pl-4">
        {getUsernameMissingText(isUsernameMissing, isUsernameInvalid)}
      </p>
    </>
  );
};

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

export default UsernameInput;
