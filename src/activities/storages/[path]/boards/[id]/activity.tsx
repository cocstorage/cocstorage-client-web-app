import GeneralAppScreen from '@components/screens/GeneralAppScreen';

import StorageBoardAppBar from './_components/StorageBoardAppBar';
import StorageBoardContent from './_components/StorageBoardContent';
import StorageBoardInfo from './_components/StorageBoardInfo';
import StorageBoardRecommend from './_components/StorageBoardRecommend';

function StorageBoardActivity() {
  return (
    <GeneralAppScreen appBar={StorageBoardAppBar()}>
      <StorageBoardInfo />
      <StorageBoardContent />
      <StorageBoardRecommend />
    </GeneralAppScreen>
  );
}

export default StorageBoardActivity;
