import { http, HttpResponse, passthrough } from 'msw';
import { CharacterItemsResponse } from '@/entities/character/model/character.type';
import getIsMocked from '@/mocks/lib/getIsMocked';

const characterHandlers = [
  http.get('/api/v1/character/collection', async ({ request }) => {
    if (!getIsMocked(request)) return passthrough();

    const dummyCharacterCollectionResponse: CharacterItemsResponse = {
      characters: [
        {
          id: 1,
          name: '마법사 또또',
          isUnlocked: true,
          imageUrl:
            'https://ylsrfiwjufyciwoidcaz.supabase.co/storage/v1/object/public/moddo/wizard_ddoddo.png',
          imageBigUrl:
            'https://ylsrfiwjufyciwoidcaz.supabase.co/storage/v1/object/public/moddo/wizard_ddoddo.png',
          rarity: 3,
          unlockedAt: '2025-02-03T00:00:00Z',
        },
        {
          id: 2,
          name: '천사 모또',
          isUnlocked: true,
          imageUrl:
            'https://ylsrfiwjufyciwoidcaz.supabase.co/storage/v1/object/public/moddo/angel_moddo.png',
          imageBigUrl:
            'https://ylsrfiwjufyciwoidcaz.supabase.co/storage/v1/object/public/moddo/angel_moddo.png',
          rarity: 2,
          unlockedAt: '2025-02-03T00:00:00Z',
        },
        {
          id: 3,
          name: '딸기 또또',
          isUnlocked: false,
          imageUrl:
            'https://ylsrfiwjufyciwoidcaz.supabase.co/storage/v1/object/public/moddo/strawberry_ddoddo.png',
          imageBigUrl:
            'https://ylsrfiwjufyciwoidcaz.supabase.co/storage/v1/object/public/moddo/strawberry_ddoddo.png',
          rarity: 1,
          unlockedAt: null,
        },
      ],
    };

    return HttpResponse.json(dummyCharacterCollectionResponse);
  }),
];

export default characterHandlers;
