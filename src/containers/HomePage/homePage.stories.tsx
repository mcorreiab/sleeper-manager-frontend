import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

import HomePage from "./homePage";

export default {
  title: "Home Page",
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => {
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);
  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowModal(true);
  };

  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onClickButton = (event: MouseEvent<HTMLButtonElement>) => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      {showModal && (
        <div className="absolute grid grid-cols-2 gap-x-1 gap-y-2 p-4 bg-gray-50 top-1/4 left-1/4">
          <p className="font-bold">Username to send:</p>
          <p>{username}</p>
          <button
            className="col-span-2 text-white bg-green-700"
            onClick={onClickButton}
          >
            Ok
          </button>
        </div>
      )}
      <HomePage
        onFormSubmit={onFormSubmit}
        username={username}
        onChangeUsername={onChangeUsername}
        isUsernameInvalid={args.isUsernameInvalid}
        isUsernameMissing={args.isUsernameMissing}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  isUsernameInvalid: false,
  isUsernameMissing: false,
};
