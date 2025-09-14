import { Meta, StoryObj } from '@storybook/react';
import theme from '@/shared/styles/theme';
import { chipVariants, chipSizes } from './index.type';
import Chip from '.';

const SAMPLE_TEXT = 'label';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: chipVariants,
    },
    size: {
      control: 'radio',
      options: chipSizes,
    },
    label: {
      control: 'text',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: SAMPLE_TEXT,
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: SAMPLE_TEXT,
  },
};

export const Showcase = () => (
  <table
    style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}
  >
    <thead>
      <tr>
        <th
          style={{
            padding: theme.unit[12],
            borderBottom: `1px solid ${theme.color.semantic.border.default}`,
            borderRight: `1px solid ${theme.color.semantic.border.default}`,
          }}
        >
          Size
        </th>
        {chipVariants.map((variant) => (
          <th
            key={variant}
            style={{
              padding: theme.unit[12],
              borderBottom: `1px solid ${theme.color.semantic.border.default}`,
            }}
          >
            {variant}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {chipSizes.map((size) => (
        <tr key={size}>
          <td
            style={{
              padding: theme.unit[12],
              fontWeight: 'bold',
              borderBottom: `1px solid ${theme.color.semantic.border.subtle}`,
              borderRight: `1px solid ${theme.color.semantic.border.default}`,
            }}
          >
            {size}
          </td>
          {chipVariants.map((variant) => (
            <td
              key={`${size}-${variant}`}
              style={{
                padding: theme.unit[12],
                borderBottom: `1px solid ${theme.color.semantic.border.subtle}`,
              }}
            >
              <Chip size={size} variant={variant} label={SAMPLE_TEXT} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
