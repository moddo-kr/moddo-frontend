import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './index';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  {
    title: 'Accordion 1',
    content: 'Accordion 1 content',
  },
  {
    title: 'Accordion 2',
    content: 'Accordion 2 content',
  },
  {
    title: 'Accordion 3',
    content: 'Accordion 3 content',
  },
];

export const SingleAccordionStory: Story = {
  name: 'Default',
  render: () => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <Accordion>
        <Accordion.Header>{items[0].title}</Accordion.Header>
        <Accordion.Content>
          <div style={{ padding: '16px' }}>{items[0].content}</div>
        </Accordion.Content>
      </Accordion>
    </div>
  ),
};

export const MultipleAccordionStory: Story = {
  name: 'Multiple',
  render: () => (
    <div
      style={{
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {items.map((item, index) => (
        <Accordion key={index}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Content>
            <div style={{ padding: '16px' }}>{item.content}</div>
          </Accordion.Content>
        </Accordion>
      ))}
    </div>
  ),
};

