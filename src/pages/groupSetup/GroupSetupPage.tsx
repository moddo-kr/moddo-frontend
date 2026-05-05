import { useFunnel } from '@use-funnel/react-router';
import { GroupNameSetupPage } from '@/pages/groupNameSetup';
import { MemberSetupPage } from '@/pages/memberSetup';
import { usePostCreateGroup } from '@/features/group-creation/api/usePostCreateGroup';

// 모임 이름 입력 스텝에 필요한 context type
type NameSetupType = {
  groupName?: string;
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
          onNext={async (groupName: string) => {
            if (isPending) return;
            await createGroup({ name: groupName });
            history.push('member', { groupName, password: '' });
          }}
        />
      )}
      // eslint-disable-next-line react/no-unstable-nested-components
      member={() => <MemberSetupPage />}
    />
  );
}

export default GroupSetupPage;
