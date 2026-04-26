import { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Group } from '@/entities/group/model/group.type';
import SelectGroupPage from './SelectGroupPage';

/**
 * NOTE
 * Flex 컴포넌트의 gap / padding 관련 변경에 대비해서
 * 스냅샷 기준을 만들기 위해 추가한 스토리입니다.
 *
 * 나중에 유지보수가 과도해질 경우 삭제해도 괜찮습니다.
 */

const queryClient = new QueryClient();

const meta: Meta<typeof SelectGroupPage> = {
  title: 'pages/SelectGroupPage',
  component: SelectGroupPage,
  parameters: {
    chromatic: { disableSnapshot: true },
    msw: {
      handlers: [
        http.get('/api/v1/groups/code', () => {
          const result: Group[] = [
            {
              id: 12345,
              groupName: '모또 정기모임',
              members: [
                {
                  id: 1,
                  name: '김모또',
                  role: 'MANAGER',
                  profile: '',
                  userId: 1,
                  isPaid: true,
                  paidAt: '2026-04-19T14:06:14',
                },
                {
                  id: 2,
                  name: '김모또',
                  role: 'PARTICIPANT',
                  profile: '',
                  userId: 2,
                  isPaid: false,
                  paidAt: null,
                },
              ],
            },
          ];
          return HttpResponse.json(result);
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
type Story = StoryObj<typeof SelectGroupPage>;

export const Default: Story = {};
