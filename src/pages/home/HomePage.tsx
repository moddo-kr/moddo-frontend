import { Divider } from '@/shared/design-system/ui';
import {
  MainHeader,
  SettlementBanner,
  SettlementList,
} from './ui/HomePageSection';
import * as S from './HomePage.style';

function HomePage() {
  return (
    <S.PageContainer>
      <MainHeader />
      <SettlementBanner />
      <Divider />
      <SettlementList />
    </S.PageContainer>
  );
}

export default HomePage;
