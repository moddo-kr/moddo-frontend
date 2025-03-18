import { useFunnel } from '@use-funnel/react-router';
import { Member } from '@/common/types/member.type';
import { usePostCreateGroup } from '@/common/queries/group/usePostCreateGroup';
import GroupNameSetup from './groupNameSetup';
import PasswordSetup from './passwordSetup';
import MemberSetup from './memberSetup';

// 모임 이름 입력 스텝에 필요한 context type
type NameSetupType = {
  groupName?: string;
  password?: string;
};
// 비밀번호 입력 스텝에 필요한 context type
type PasswordSetupType = {
  groupName: string;
  password?: string;
};
// 참여자 입력 스텝에 필요한 context type
type MemberSetupType = {
  groupName: string;
  password: string;
};

function GroupSetup() {
  const { mutate: createGroup } = usePostCreateGroup();
  const funnel = useFunnel<{
    name: NameSetupType;
    password: PasswordSetupType;
    member: MemberSetupType;
  }>({
    id: 'group-setup',
    initial: {
      step: 'name',
      context: {},
    },
  });

  console.log('step:', funnel.step);

  return (
    <funnel.Render
      // eslint-disable-next-line react/no-unstable-nested-components
      name={({ history }) => (
        <GroupNameSetup
          onNext={(groupName: string) =>
            history.push('password', { groupName })
          }
        />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      password={({ history, context }) => (
        <PasswordSetup
          groupName={context.groupName}
          onNext={(password: string) => {
            history.push('member', { password }); // 1️⃣ 에러가 남
            // history.push('name', { password }); // 2️⃣ 에러가 나지 않음
            // await createGroup({ name: context.groupName, password });
          }}
        />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      member={({ context }) => <MemberSetup context={context} />}
    />
  );
}

export default GroupSetup;
