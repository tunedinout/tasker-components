// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../components";
import { PiPlus } from "react-icons/pi";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  // You can add args or other parameters here if desired
};

export default meta;

type ButtonStory = StoryObj<typeof Button>;

/**
 * A single story object:
 *
 *   export const Default: ButtonStory = {
 *     args: { ... }
 *   };
 *
 * Instead of using Template.bind({}), the new recommended approach
 * is to define a plain object with `args`, `play`, etc.
 */
export const Default: ButtonStory = {
  args: {
    label: "Click Me",
    variant: "default",
    onClick: () => alert("Button clicked!"),
  },
};

export const Primary: ButtonStory = {
  args: {
    label: "Primary Button",
    variant: "primary",
    onClick: () => alert("Primary clicked!"),
  },
};

export const Secondary: ButtonStory = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    onClick: () => alert("Secondary clicked!"),
  },
};


export const Danger: ButtonStory = {
  args: {
    label: "Danger Button",
    variant: "danger",
    onClick: () => alert("Danger clicked!"),
  },
};

export const Warning: ButtonStory = {
  args: {
    label: "Warning Button",
    variant: "warning",
    onClick: () => alert("Warning clicked!"),
  },
};

export const DisabledDefault: ButtonStory = {
  args: {
    label: "I am disabled",
    disabled: true,
    onClick: () => alert("Should not fire!"),
  },
};

export const DisabledPrimary: ButtonStory = {
  args: {
    variant: "primary",
    label: "I am disabled",
    disabled: true,
    onClick: () => alert("Should not fire!"),
  },
};

export const DisabledDanger: ButtonStory = {
  args: {
    variant: "danger",
    label: "I am disabled danger",
    disabled: true,
    onClick: () => alert("Should not fire!"),
  },
};

// 7. A story with a custom rendering (if needed)
export const CustomRender: ButtonStory = {
  args: {
    label: "Custom Render",
    onClick: () => alert("Custom Render clicked!"),
  },
  // If you need a custom render function, you can do so:
  render: (args) => (
    <div style={{ backgroundColor: "lightgray", padding: "1rem" }}>
      <Button {...args} />
    </div>
  ),
};

export const SuccessOrCTA: ButtonStory = {
  args: {
    variant: "success",
    onClick: () => alert("CTA clicked!"),
  },

  render: (args) => (
    <Button {...args}>
      <PiPlus size={16} color="white" />
      <span style={{ marginLeft: "4px" }}>Add</span>
    </Button>
  ),
};
