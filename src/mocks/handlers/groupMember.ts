import { http, HttpResponse, passthrough } from 'msw';
import getIsMocked from '@/mocks/utils/getIsMocked';
import { Member, MemberData, MemberRole } from '@/common/types/member.type';
import defaultProfileImg from '@/assets/pngs/defaultProfileImg.png';

/** 김모또는 고정 */
export const dummyGroupMembers: Member[] = [
  {
    id: 1,
    role: 'MANAGER',
    name: '김모또',
    profile: defaultProfileImg,
    isPaid: true,
    paidAt: null,
  },
];

interface RequestBody {
  members: MemberData[];
}

const groupMemberHandlers = [
  http.post<object, RequestBody>(
    `/group-members`,
    async ({ request }) => {
      if (!getIsMocked(request)) return passthrough();

      const url = new URL(request.url);
      const groupToken = url.searchParams.get('groupToken');

      if (!groupToken) {
        return HttpResponse.json(
          { error: 'groupToken is required' },
          { status: 400 }
        );
      }

      const body = await request.json();

      console.log(body);

      const { members } = body;
      
      // 요청 body를 이용해 멤버 배열을 생성하는 함수
      const responseMembers = Array.from({ length: members.length + 1 }, (_, index) => {
        if (index === 0) {
          // 첫 번째 멤버는 김모또로 고정
          return dummyGroupMembers[0];
        }
        const newMember = {
          id: index,
          role: 'PARTICIPANT' as MemberRole,
          name: members[index - 1].name,
          profile: defaultProfileImg,
          isPaid: false,
          paidAt: null,
        };
        return newMember;
      });

      // 이 시점에서 dummyGroupMembers 배열은 변경되지 않음
      return HttpResponse.json({
        members: responseMembers,
      });
    }
  ),
];

export default groupMemberHandlers;
