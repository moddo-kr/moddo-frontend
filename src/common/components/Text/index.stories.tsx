import { Meta, StoryObj } from '@storybook/react';
import theme from '@/styles/theme';
import { ColorTokenType, TypographyKey } from '@/styles/theme.type';
import Text from '.';

const SAMPLE_TEXT = '즐거운 만남, 끝까지 즐겁게 (*´▽`*), 모임 또모여 ‘모또’';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(theme.typography.fontSize),
    },
    color: {
      control: 'select',
      options: [
        'semantic.text.default',
        'semantic.text.disabled',
        'semantic.text.heavy',
        'semantic.text.inverse',
        'semantic.text.strong',
        'semantic.text.subtle',
        'semantic.primary.default',
        'semantic.state.danger',
        'semantic.state.info',
        'semantic.state.success',
        'semantic.state.warning',
        'primitive.blue.500',
        'primitive.gray.500',
        'primitive.green.500',
        'primitive.orange.500',
        'primitive.red.500',
        'primitive.yellow.500',
      ] as ColorTokenType[],
    },
    as: {
      control: 'select',
      options: ['span', 'p', 'h1', 'h2', 'h3'],
    },
    children: {
      control: 'text',
    },
  },
  args: {
    variant: 'body1R',
    color: 'semantic.text.default',
    as: 'span',
    children: SAMPLE_TEXT,
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: SAMPLE_TEXT,
  },
};

export const Showcase = () => (
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr
        style={{
          fontSize: theme.typography.fontSize.body1R,
          fontWeight: theme.typography.fontWeight.body1Sb,
          borderBottom: `1px solid ${theme.color.semantic.border.default}`,
        }}
      >
        <th style={{ textAlign: 'left', padding: theme.unit[12] }}>Variant</th>
        <th style={{ textAlign: 'left', padding: theme.unit[12] }}>Example</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(theme.typography.fontSize).map((variant) => (
        <tr key={variant}>
          <td
            style={{
              padding: theme.unit[12],
              fontWeight: theme.typography.fontWeight.body2Sb,
            }}
          >
            {variant}
          </td>
          <td style={{ padding: theme.unit[12] }}>
            <Text variant={variant as TypographyKey} as="p">
              {SAMPLE_TEXT}
            </Text>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
