import { useNavigate, generatePath, useLoaderData } from 'react-router';
import { BottomSheet, ActionArea } from '@/shared/design-system/ui';
import { CHARACTER_DATA } from '@/entities/character/config/character';
import { ROUTE } from '@/shared/config/route';
import useGetCharacter from '@/features/character-management/api/useGetCharacter';
import * as S from './index.styles';

interface CharacterBottomSheetProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function CharacterBottomSheet({ open, setOpen }: CharacterBottomSheetProps) {
  const { groupToken } = useLoaderData();
  const { data, isLoading, isError } = useGetCharacter(groupToken);
  const navigate = useNavigate();

  if (isLoading) return null;

  if (isError || !data) {
    // 캐릭터가 아직 없는 경우에 대한 처리가 필요할 수도 있음
    return null;
  }

  return (
    <BottomSheet
      open={open}
      onClose={() => setOpen(false)}
      ariaLabel="캐릭터 획득 알림"
    >
      <S.BottomSheetContainer>
        <S.CharacterImageContainer>
          <img
            src={data.imageUrl}
            alt={data.name}
            style={{
              ...CHARACTER_DATA[data.name].imageSize.small,
            }}
          />
        </S.CharacterImageContainer>
        <S.DescriptionContainer>
          <S.CharacterTitle>두둥, {data.name} 등장!</S.CharacterTitle>
          <S.CharacterDescription>
            모두가 시간 내에 정산을 완료했어요!
            <br />
            참여해준 모든 분께 캐릭터를 선물로 드려요!
          </S.CharacterDescription>
        </S.DescriptionContainer>
        <ActionArea
          layout="horizontal"
          showBottomSafeArea={false}
          hasHorizontalPadding={false}
          mainAction={{
            label: '캐릭터 보기',
            onClick: () =>
              navigate(generatePath(ROUTE.characterShare, { groupToken })),
          }}
          alternativeAction={{ label: '닫기', onClick: () => setOpen(false) }}
        />
      </S.BottomSheetContainer>
    </BottomSheet>
  );
}

export default CharacterBottomSheet;
