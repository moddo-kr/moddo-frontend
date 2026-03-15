import Divider from '@/shared/ui/Divider';
import Flex from '@/shared/ui/Flex';
import {
  MainHeader,
  SettlementBanner,
  SettlementList,
} from './ui/HomePageSection';

function HomePage() {
  return (
    <Flex direction="column" flexGrow={1}>
      <MainHeader />
      <SettlementBanner />
      <Divider />
      <SettlementList />
    </Flex>
  );
}

export default HomePage;
