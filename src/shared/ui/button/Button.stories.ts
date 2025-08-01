import type { Meta, StoryObj } from "@storybook/react-vite";
import Button, { ButtonSize, ButtonVariant } from "./Button";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: Object.values(ButtonVariant),
    },
    size: {
      control: { type: "radio" },
      options: Object.values(ButtonSize),
    },
    disabled: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Button",
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.MEDIUM,
    disabled: false,
  },
};


export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
    args: {
        children: 'Press me!',
        variant: ButtonVariant.PRIMARY,
        size: ButtonSize.SMALL
    }
};

