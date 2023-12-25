import GeneralAppScreen from '@components/screens/GeneralAppScreen';

import StorageBoardAppBar from './_components/StorageBoardAppBar';
import StorageBoardContent from './_components/StorageBoardContent';
import StorageBoardFooter from './_components/StorageBoardFooter';
import StorageBoardInfo from './_components/StorageBoardInfo';
import StorageBoardRecommend from './_components/StorageBoardRecommend';

function StorageBoardActivity() {
  return (
    <GeneralAppScreen appBar={StorageBoardAppBar()} bottomNavigation={<StorageBoardFooter />}>
      <StorageBoardInfo />
      <StorageBoardContent />
      <StorageBoardRecommend />
    </GeneralAppScreen>
  );
}

export default StorageBoardActivity;
