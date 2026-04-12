import { http, HttpResponse, passthrough } from 'msw';
import { CharacterItemsRawResponse } from '@/entities/character/model/character.type';
import getIsMocked from '@/mocks/lib/getIsMocked';

const characterHandlers = [
  http.get('/api/v1/collections', async ({ request }) => {
    if (!getIsMocked(request)) return passthrough();

    const dummyCharacterCollectionResponse: CharacterItemsRawResponse = {
      collections: [
        {
          id: 1,
          name: '마법사 또또',
          imageUrl:
            'https://ylsrfiwjufyciwoidcaz.supabase.co/storage/v1/object/public/moddo/wizard_ddoddo.png',
          imageBigUrl:
            'https://ylsrfiwjufyciwoidcaz.supabase.co/storage/v1/object/public/moddo/wizard_ddoddo.png',
          rarity: 3,
          acquiredAt: '2025-02-03T00:00:00Z',
        },
        {
          id: 2,
          name: '천사 모또',
          imageUrl:
            'https://ylsrfiwjufyciwoidcaz.supabase.co/storage/v1/object/public/moddo/angel_moddo.png',
          imageBigUrl:
            'https://ylsrfiwjufyciwoidcaz.supabase.co/storage/v1/object/public/moddo/angel_moddo.png',
          rarity: 2,
          acquiredAt: '2025-02-03T00:00:00Z',
        },
        {
          id: 3,
          name: '딸기 또또',
          imageUrl:
            'https://ylsrfiwjufyciwoidcaz.supabase.co/storage/v1/object/public/moddo/strawberry_ddoddo.png',
          imageBigUrl:
            'https://ylsrfiwjufyciwoidcaz.supabase.co/storage/v1/object/public/moddo/strawberry_ddoddo.png',
          rarity: 1,
          acquiredAt: null,
        },
      ],
    };

    return HttpResponse.json(dummyCharacterCollectionResponse);
  }),
];

export default characterHandlers;
