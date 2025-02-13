export interface Member {
  id: string;
  name: string;
  /** @todo role은 추후 논의 후 수정하기 */
  role: 'treasurer' | 'participant';
}

type MemberRole = 'MANAGER' | 'PARTICIPANT';

// FIXME : 상단 Member와 중복을 피하기 위한 이름, 나중에 기존 Member를 삭제하고 이 이름을 Member로 변경할 것
export interface Member2 {
  id: number;
  name: string;
  role: MemberRole;
}
