import { Meta } from '@storybook/react';
import theme from '@/shared/styles/theme';
import { nameChipSizes, nameChipVariants } from './index.type';
import NameChip from '.';

const SAMPLE_TEXT = 'label';

const meta: Meta<typeof NameChip> = {
  title: 'Components/NameChip',
  tags: ['autodocs'],
  args: {
    variant: 'orange',
    size: 'md',
    label: SAMPLE_TEXT,
  },
};

export default meta;

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
        {nameChipVariants.map((variant) => (
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
      {nameChipSizes.map((size) => (
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
          {nameChipVariants.map((variant) => (
            <td
              key={`${size}-${variant}`}
              style={{
                padding: theme.unit[12],
                borderBottom: `1px solid ${theme.color.semantic.border.subtle}`,
              }}
            >
              <NameChip size={size} variant={variant} label={SAMPLE_TEXT} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
