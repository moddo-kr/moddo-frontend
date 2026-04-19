import { Meta, StoryObj } from '@storybook/react';
import { waitFor, within } from '@storybook/test';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';
import ExpenseTimeHeader from './index';

/**
 * NOTE
 * Flex 컴포넌트의 gap / padding 관련 변경에 대비해서
 * 스냅샷 기준을 만들기 위해 추가한 스토리입니다.
 *
 * 나중에 유지보수가 과도해질 경우 삭제해도 괜찮습니다.
 */

const queryClient = new QueryClient();

const meta: Meta<typeof ExpenseTimeHeader> = {
  title: 'ui/ExpenseTimeHeader',
  component: ExpenseTimeHeader,
  parameters: {
    chromatic: { disableSnapshot: false },
    msw: {
      handlers: [
        http.get('/groups/:settlementCode/header', () => {
          return HttpResponse.json({
            groupName: '모또 정기모임',
            totalAmount: 150000,
            deadline: '2025-12-26T23:59:59Z',
            bank: '국민은행',
            accountNumber: '123456-78-910111',
          });
        }),
      ],
    },
  },
  decorators: [
    (Story) => {
      const mockRouter = createMemoryRouter([
        {
          path: '/*',
          element: <Story />,
          loader: () => ({ groupToken: 'mock-group-token' }),
        },
      ]);
      return (
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={mockRouter} />
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof ExpenseTimeHeader>;

export const Default: Story = {
  args: {
    totalMember: 6,
    paidMember: 3,
    status: 'success',
    isChecked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      canvas.getByText('정산을 완료해주세요');
    });
  },
};
