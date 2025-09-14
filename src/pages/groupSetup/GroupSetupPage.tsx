import { useFunnel } from '@use-funnel/react-router';
import { GroupNameSetupPage } from '@/pages/groupNameSetup';
import { PasswordSetupPage } from '@/pages/passwordSetup';
import { MemberSetupPage } from '@/pages/memberSetup';
import { usePostCreateGroup } from './api/usePostCreateGroup';

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

function GroupSetupPage() {
  const { mutateAsync: createGroup, isPending } = usePostCreateGroup();
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
        <GroupNameSetupPage
          onNext={(groupName: string) =>
            history.push('password', { groupName })
          }
        />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      password={({ history, context }) => (
        <PasswordSetupPage
          groupName={context.groupName}
          onNext={async (password: string) => {
            if (isPending) return;
            try {
              await createGroup({
                name: context.groupName,
                password,
              });
              history.push('member', { password });
            } catch {
              // 실패 로직,,
            }
          }}
        />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      member={() => <MemberSetupPage />}
    />
  );
}

export default GroupSetupPage;
