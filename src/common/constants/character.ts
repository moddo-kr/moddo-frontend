import { CharacterType } from '@/common/types/character';

export const CHARACTER_NAME: Record<CharacterType, string> = {
  angel: '천사 모또',
  lucky: '러키 모또',
  strawberry: '딸기 또또',
  sleep: '잠꾸러기 또또',
  magic: '마법사 또또',
};

export const CHARACTER_IMAGE_SIZE: Record<
  CharacterType,
  {
    big: {
      width?: string;
      height?: string;
    };
    small: {
      width?: string;
      height?: string;
    };
  }
> = {
  angel: {
    big: {
      width: '15rem',
    },
    small: {
      width: '12rem',
    },
  },
  lucky: {
    big: {
      width: '12.5rem',
    },
    small: {
      width: '10rem',
    },
  },
  strawberry: {
    big: {
      width: '12.5rem',
    },
    small: {
      width: '10rem',
      height: '10rem',
    },
  },
  sleep: {
    big: {
      width: '12.5rem',
    },
    small: {
      width: '10rem',
    },
  },
  magic: {
    big: {
      height: '13.72844rem',
    },
    small: {
      height: '10.98275rem',
    },
  },
};

export const CHARACTER_DESCRIPTION: Record<CharacterType, string> = {
  angel: '정산의 수호천사 등장!',
  lucky: '정산 성공! 좋은 일만 가득하길~',
  strawberry: '정산 완료! 달콤한 하루 보내~',
  sleep: '정산 끝났어? 이제 푹 잘 수 있겠네~',
  magic: '정산? 아브라카다브라! 해결 완료~',
};
