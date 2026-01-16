import { useLoaderData, useNavigate, generatePath } from 'react-router';
import useGetCharacterSuspense from '@/features/character-management/api/useGetCharacterSuspense';
import { CHARACTER_IMAGE_SIZE } from '@/entities/character/config/character';
import { ROUTE } from '@/shared/config/route';
import Text from '@/shared/ui/Text';
import ButtonGroup from '@/shared/ui/ButtonGroup';
import Button from '@/shared/ui/Button';
import * as S from './CharacterBottomSheetContent.styles';

interface CharacterBottomSheetContentProps {
  setOpen: (open: boolean) => void;
}

function CharacterBottomSheetContent({
  setOpen,
}: CharacterBottomSheetContentProps) {
  const { groupToken } = useLoaderData();
  const { data } = useGetCharacterSuspense(groupToken);
  const navigate = useNavigate();

  return (
    <S.BottomSheetContainer>
      <S.CharacterImageContainer>
        <img
          src={data.imageUrl}
          alt={data.name}
          style={CHARACTER_IMAGE_SIZE[data.name].small}
        />
      </S.CharacterImageContainer>
      <S.DescriptionContainer>
        <Text variant="heading2" color="semantic.text.strong">
          두둥, {data.name} 등장!
        </Text>
        <Text>
          모두가 시간 내에 정산을 완료했어요!
          <br />
          참여해준 모든 분께 캐릭터를 선물로 드려요!
        </Text>
      </S.DescriptionContainer>
      <ButtonGroup>
        <Button variant="secondary" onClick={() => setOpen(false)}>
          닫기
        </Button>
        <Button
          onClick={() =>
            navigate(
              generatePath(ROUTE.billDetailCharacterShare, { groupToken })
            )
          }
        >
          캐릭터 보기
        </Button>
      </ButtonGroup>
    </S.BottomSheetContainer>
  );
}

export default CharacterBottomSheetContent;
