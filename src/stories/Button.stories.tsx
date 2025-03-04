// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {Button} from '../components'

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  // You can add args or other parameters here if desired
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * A single story object:
 * 
 *   export const Default: Story = {
 *     args: { ... }
 *   };
 *
 * Instead of using Template.bind({}), the new recommended approach
 * is to define a plain object with `args`, `play`, etc.
 */
export const Default: Story = {
  args: {
    label: 'Click Me',
    variant: 'default',
    onClick: () => alert('Button clicked!'),
  },
};

// 4. A “Primary” story
export const Primary: Story = {
    args: {
      label: 'Primary Button',
      variant: 'primary',       //  <-- If your Button component supports a 'variant' prop
      onClick: () => alert('Primary clicked!'),
    },
  };
  
  // 5. A “Secondary” story
  export const Secondary: Story = {
    args: {
      label: 'Secondary Button',
      variant: 'secondary',     //  <-- If your Button component supports a 'variant' prop
      onClick: () => alert('Secondary clicked!'),
    },
  };
  
  // 6. A “Disabled” story
  export const DisabledDefault: Story = {
    args: {
      label: 'I am disabled',
      disabled: true,
      onClick: () => alert('Should not fire!'),
    },
  };

  export const DisabledPrimary: Story = {
    args: {
      variant: 'primary',
      label: 'I am disabled',
      disabled: true,
      onClick: () => alert('Should not fire!'),
    },
  };

  export const DisabledSecondary: Story = {
    args: {
      variant: 'secondary',
      label: 'I am disabled',
      disabled: true,
      onClick: () => alert('Should not fire!'),
    },
  };
  
  // 7. A story with a custom rendering (if needed)
  export const CustomRender: Story = {
    args: {
      label: 'Custom Render',
      onClick: () => alert('Custom Render clicked!'),
    },
    // If you need a custom render function, you can do so:
    render: (args) => (
      <div style={{ backgroundColor: 'lightgray', padding: '1rem' }}>
        <Button {...args} />
      </div>
    ),
  };


