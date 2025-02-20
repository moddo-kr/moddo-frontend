// import { useLoaderData } from 'react-router';
// eslint-disable-next-line import/no-absolute-path
import characterImageUrl from '/pngs/angle-moddo.png';
import Text from '@/common/components/Text';
import { CharacterData } from '@/common/types/character';
import {
  CHARACTER_NAME,
  CHARACTER_IMAGE_SIZE,
} from '@/common/constants/character';
import BottomSheet from '@/common/components/BottomSheet';
import ButtonGroup from '@/common/components/ButtonGroup';
import Button from '@/common/components/Button';
import * as S from './index.styles';

const DUMMY_CHARACTER_DATA: CharacterData = {
  name: 'angel',
  rarity: 2,
  imageUrl: characterImageUrl,
  imageBigUrl: characterImageUrl,
};

interface CharacterBottomSheetProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function CharacterBottomSheet({ open, setOpen }: CharacterBottomSheetProps) {
  // const { groupToken } = useLoaderData();
  // const { data } = useGetCharacter({ groupToken });

  return (
    <BottomSheet open={open} setOpen={setOpen}>
      <S.BottomSheetContainer>
        <S.CharacterImageContainer>
          <img
            src={DUMMY_CHARACTER_DATA.imageUrl}
            alt={CHARACTER_NAME[DUMMY_CHARACTER_DATA.name]}
            style={{
              ...CHARACTER_IMAGE_SIZE[DUMMY_CHARACTER_DATA.name].small,
            }}
          />
        </S.CharacterImageContainer>
        <S.DescriptionContainer>
          <Text variant="heading2" color="semantic.text.strong">
            두둥, {CHARACTER_NAME[DUMMY_CHARACTER_DATA.name]} 등장!
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
          <Button>캐릭터 보기</Button>
        </ButtonGroup>
      </S.BottomSheetContainer>
    </BottomSheet>
  );
}

export default CharacterBottomSheet;
