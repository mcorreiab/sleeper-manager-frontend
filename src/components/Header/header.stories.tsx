import { ComponentMeta, ComponentStory } from "@storybook/react";

import Header from "./index";

export default {
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ width: "480px", backgroundColor: "black" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Header>;

export const Primary: ComponentStory<typeof Header> = () => <Header />;
