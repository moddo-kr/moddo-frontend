import { Meta, StoryObj } from '@storybook/react';
import { ArrowLeft, Bell } from '@/assets/svgs/icon';
import theme from '@/styles/theme';
import { buttonVariants, buttonSizes } from './index.type';
import Button from '.';

const SAMPLE_TEXT = 'label';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: buttonVariants,
    },
    size: {
      control: 'radio',
      options: buttonSizes,
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    children: SAMPLE_TEXT,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: SAMPLE_TEXT,
  },
};

export const TextButton: Story = {
  args: {
    variant: 'text',
  },
  render: (args) => {
    const childrenVariants = [
      { key: 'icon-only', content: <Bell width={24} /> },
      { key: 'text-only', content: '지출 추가' },
      {
        key: 'icon-text',
        content: (
          <>
            <ArrowLeft width={24} /> 뒤로가기
          </>
        ),
      },
    ];

    return (
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'center',
        }}
      >
        <thead>
          <tr>
            {childrenVariants.map(({ key }) => (
              <th
                key={key}
                style={{
                  padding: theme.unit[12],
                  borderBottom: `1px solid ${theme.color.semantic.border.default}`,
                }}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {childrenVariants.map(({ key, content }) => (
              <td
                key={key}
                style={{
                  padding: theme.unit[12],
                  borderBottom: `1px solid ${theme.color.semantic.border.subtle}`,
                }}
              >
                <Button {...args}>{content}</Button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  },
};

export const Showcase = () => {
  const showcaseVariant = buttonVariants.filter(
    (variant) => variant !== 'text'
  );

  return (
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
          {showcaseVariant.map((variant) => (
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
          <th
            style={{
              padding: theme.unit[12],
              borderBottom: `1px solid ${theme.color.semantic.border.default}`,
            }}
          >
            disabled
          </th>
        </tr>
      </thead>
      <tbody>
        {buttonSizes.map((size) => (
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
            {showcaseVariant.map((variant) => (
              <td
                key={`${size}-${variant}`}
                style={{
                  padding: theme.unit[12],
                  borderBottom: `1px solid ${theme.color.semantic.border.subtle}`,
                }}
              >
                <Button size={size} variant={variant}>
                  {SAMPLE_TEXT}
                </Button>
              </td>
            ))}
            <td
              style={{
                padding: theme.unit[12],
                borderBottom: `1px solid ${theme.color.semantic.border.subtle}`,
              }}
            >
              <Button size={size} disabled>
                {SAMPLE_TEXT}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
