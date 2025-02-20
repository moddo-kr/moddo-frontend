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
      height: '14.25rem',
    },
    small: {
      width: '12rem',
      height: '9.70538rem',
    },
  },
  lucky: {
    big: {
      width: '12.5rem',
      height: '12.5rem',
    },
    small: {
      width: '10rem',
      height: '10rem',
    },
  },
  strawberry: {
    big: {
      width: '12.5rem',
      height: '12.5rem',
    },
    small: {
      width: '10rem',
      height: '10rem',
    },
  },
  sleep: {
    big: {
      width: '12.5rem',
      height: '12.5rem',
    },
    small: {
      width: '10rem',
      height: '10rem',
    },
  },
  magic: {
    big: {
      width: '8.75rem',
      height: '13.72844rem',
    },
    small: {
      width: '7rem',
      height: '10.98275rem',
    },
  },
};
