import { ArrowLeft } from '@/shared/assets/svgs/icon';
import {
  ActionArea,
  DescriptionField,
  Header,
  Profile,
} from '@/shared/design-system/ui';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { MemberProfile } from '@/entities/member/model/member.type';
import { useState } from 'react';
import useAssignMember from '@/features/join/api/useAssignMember';
import { PageLayout } from '@/shared/ui/PageLayout';
import * as S from './JoinPage.styles';

function JoinPage() {
  const navigate = useNavigate();
  // TODO: groupToken → settlementCode 마이그레이션 시 파라미터 이름 변경 필요
  const { groupToken } = useParams();
  const { profiles } = useLoaderData() as { profiles: MemberProfile[] };
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { mutate: assignMember, isPending } = useAssignMember(groupToken!);

  const handleSelect = (id: number) => {
    setSelectedId(id);
  };

  const handleConfirm = () => {
    if (selectedId === null || !groupToken) return;
    assignMember(selectedId, {
      onSuccess: () => {
        navigate(`/expense-detail/${groupToken}`);
      },
    });
  };

  const getProfileType = (profile: MemberProfile) => {
    if (profile.userId !== null) return 'disabled';
    if (profile.id === selectedId) return 'checked';
    return 'default';
  };

  return (
    <PageLayout>
      <Header
        headingIcon={<ArrowLeft width="1.5rem" />}
        headingLabel="뒤로가기"
        onHeadingIconClick={() => navigate(-1)}
      />
      <DescriptionField
        title="정산에 참여할 프로필을 선택하세요."
        sub="선택한 프로필로 정산이 진행됩니다."
      />
      <S.ScrollWrapper>
        <S.ScrollArea>
          <S.ProfileGrid>
            {profiles.map((profile) => (
              <S.ProfileButton
                key={profile.id}
                type="button"
                disabled={profile.userId !== null}
                onClick={() => handleSelect(profile.id)}
                aria-pressed={
                  profile.userId === null
                    ? profile.id === selectedId
                    : undefined
                }
              >
                <Profile
                  size="L"
                  type={getProfileType(profile)}
                  label={profile.name}
                  src={profile.profile}
                />
              </S.ProfileButton>
            ))}
          </S.ProfileGrid>
        </S.ScrollArea>
        <S.GradientOverlay />
      </S.ScrollWrapper>
      <ActionArea
        mainAction={{
          label: '선택',
          onClick: handleConfirm,
          disabled: selectedId === null || isPending,
        }}
      />
    </PageLayout>
  );
}

export default JoinPage;
