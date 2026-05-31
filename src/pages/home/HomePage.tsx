import { Divider } from '@/shared/design-system/ui';
import { PageLayout } from '@/shared/ui/PageLayout';
import {
  MainHeader,
  SettlementBanner,
  SettlementList,
} from './ui/HomePageSection';

function HomePage() {
  return (
    <PageLayout>
      <MainHeader />
      <SettlementBanner />
      <Divider />
      <SettlementList />
    </PageLayout>
  );
}

export default HomePage;
