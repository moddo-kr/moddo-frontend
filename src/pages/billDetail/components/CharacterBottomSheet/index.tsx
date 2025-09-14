import { useNavigate, generatePath, useLoaderData } from 'react-router';
import Text from '@/shared/components/Text';
import { CHARACTER_IMAGE_SIZE } from '@/shared/constants/character';
import { ROUTE } from '@/shared/constants/route';
import BottomSheet from '@/shared/components/BottomSheet';
import ButtonGroup from '@/shared/components/ButtonGroup';
import Button from '@/shared/components/Button';
import useGetCharacter from '@/shared/queries/image/useGetCharacter';
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
    <BottomSheet open={open} setOpen={setOpen}>
      <S.BottomSheetContainer>
        <S.CharacterImageContainer>
          <img
            src={data.imageUrl}
            alt={data.name}
            style={{
              ...CHARACTER_IMAGE_SIZE[data.name].small,
            }}
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
    </BottomSheet>
  );
}

export default CharacterBottomSheet;
