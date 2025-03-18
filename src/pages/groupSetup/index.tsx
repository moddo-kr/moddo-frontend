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
  groupToken?: string;
};
// 비밀번호 입력 스텝에 필요한 context type
type PasswordSetupType = {
  groupName: string;
  password?: string;
  groupToken?: string;
};
// 참여자 입력 스텝에 필요한 context type
type MemberSetupType = {
  groupName: string;
  password: string;
  groupToken?: string;
};

function GroupSetup() {
  const { mutateAsync: createGroup } = usePostCreateGroup();
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
          onNext={async (password: string) => {
            const { groupToken } = await createGroup({
              name: context.groupName,
              password,
            });
            history.push('member', { password, groupToken });
          }}
        />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      member={({ context }) => <MemberSetup groupToken={context.groupToken} />}
    />
  );
}

export default GroupSetup;
