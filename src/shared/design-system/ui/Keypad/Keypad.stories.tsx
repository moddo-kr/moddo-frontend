import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Keypad } from './Keypad';
import type { KeypadProps, KeyValue } from './Keypad';

const meta: Meta<KeypadProps> = {
  title: 'Design System/Keypad',
  component: Keypad,
  tags: ['autodocs'],
  args: {
    onPress: (key) => console.log('pressed:', key),
  },
};

export default meta;
type Story = StoryObj<KeypadProps>;

export const Default: Story = {};

function InteractiveDemo() {
  const [value, setValue] = useState('');

  const handlePress = (key: KeyValue) => {
    if (key === 'delete') {
      setValue((prev) => prev.slice(0, -1));
    } else if (key === 'cancel') {
      setValue('');
    } else {
      setValue((prev) => prev + key);
    }
  };

  return (
    <div style={{ width: 350 }}>
      <div
        style={{
          marginBottom: 16,
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'right',
          padding: '8px 16px',
        }}
      >
        입력값: {value || '0'}
      </div>
      <Keypad onPress={handlePress} />
    </div>
  );
}

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
};
