import { ArrowLeft } from '@/shared/assets/svgs/icon';
import { BottomButtonContainer } from '@/shared/styles/bottomButton.styles';
import Button from '@/shared/ui/Button';
import DescriptionField from '@/shared/ui/DescriptionField';
import Header from '@/shared/ui/Header';
import Text from '@/shared/ui/Text';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { useTheme } from 'styled-components';
import { MemberProfile } from '@/entities/member/model/member.type';
import { useState } from 'react';
import useAssignMember from '@/features/join/api/useAssignMember';
import Profile from '@/shared/ui/Profile';
import * as S from './JoinPage.styles';

function JoinPage() {
  const { unit } = useTheme();
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
        console.log('프로필 선택 성공');
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
    <>
      <Header
        type="TitleCenter"
        leftButtonContent={
          <>
            <ArrowLeft width={unit[24]} />
            <Text>뒤로가기</Text>
          </>
        }
        leftButtonOnClick={() => navigate(-1)}
      />
      <DescriptionField
        title="정산에 참여할 프로필을 선택하세요."
        sub="선택한 프로필로 정산이 진행됩니다."
      />
      <S.ScrollWrapper>
        <S.ScrollArea>
          <S.ProfileGrid>
            {profiles.map((profile) => (
              <Profile
                key={profile.id}
                id={profile.id}
                name={profile.name}
                imageSrc={profile.profile}
                size="L"
                type={getProfileType(profile)}
                onClick={
                  profile.userId === null
                    ? () => handleSelect(profile.id)
                    : undefined
                }
              />
            ))}
          </S.ProfileGrid>
        </S.ScrollArea>
        <S.GradientOverlay />
      </S.ScrollWrapper>
      <BottomButtonContainer>
        <Button
          disabled={selectedId === null || isPending}
          onClick={handleConfirm}
        >
          선택
        </Button>
      </BottomButtonContainer>
    </>
  );
}

export default JoinPage;
