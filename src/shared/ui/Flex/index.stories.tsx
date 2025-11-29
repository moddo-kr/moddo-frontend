import type { Meta, StoryObj } from '@storybook/react';
import Flex from './index';

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    align: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    },
    justify: {
      control: 'select',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    gap: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const RowLayout: Story = {
  args: {
    direction: 'row',
    gap: '1rem',
    children: (
      <>
        <div style={{ padding: '1rem', background: '#e1e1e1' }}>Item 1</div>
        <div style={{ padding: '1rem', background: '#e1e1e1' }}>Item 2</div>
        <div style={{ padding: '1rem', background: '#e1e1e1' }}>Item 3</div>
      </>
    ),
  },
};

export const ColumnLayout: Story = {
  args: {
    direction: 'column',
    gap: '1rem',
    children: (
      <>
        <div style={{ padding: '1rem', background: '#e1e1e1' }}>Item 1</div>
        <div style={{ padding: '1rem', background: '#e1e1e1' }}>Item 2</div>
        <div style={{ padding: '1rem', background: '#e1e1e1' }}>Item 3</div>
      </>
    ),
  },
};

export const CenteredContent: Story = {
  args: {
    justify: 'center',
    align: 'center',
    height: '200px',
    style: { border: '1px solid #ccc' },
    children: <div>Centered Content</div>,
  },
};

export const SpaceBetween: Story = {
  args: {
    justify: 'space-between',
    align: 'center',
    width: '100%',
    children: (
      <>
        <div style={{ padding: '1rem', background: '#e1e1e1' }}>Left</div>
        <div style={{ padding: '1rem', background: '#e1e1e1' }}>Center</div>
        <div style={{ padding: '1rem', background: '#e1e1e1' }}>Right</div>
      </>
    ),
  },
};
