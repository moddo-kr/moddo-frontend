export const CHARACTER_DATA = {
  '천사 모또': {
    imageSize: {
      big: { width: '15rem' },
      small: { width: '12rem' },
    },
    description: '정산의 수호천사 등장!',
  },
  '러키 모또': {
    imageSize: {
      big: { width: '12.5rem' },
      small: { width: '10rem' },
    },
    description: '정산 성공! 좋은 일만 가득하길~',
  },
  '딸기 또또': {
    imageSize: {
      big: { width: '12.5rem' },
      small: { width: '10rem', height: '10rem' },
    },
    description: '정산 완료! 달콤한 하루 보내~',
  },
  '잠꾸러기 또또': {
    imageSize: {
      big: { width: '12.5rem' },
      small: { width: '10rem' },
    },
    description: '정산 끝났어? 이제 푹 잘 수 있겠네~',
  },
  '마법사 또또': {
    imageSize: {
      big: { height: '13.72844rem' },
      small: { height: '10.98275rem' },
    },
    description: '정산? 아브라카다브라! 해결 완료~',
  },
} satisfies Record<
  string,
  {
    imageSize: {
      big: { width?: string; height?: string };
      small: { width?: string; height?: string };
    };
    description: string;
  }
>;
