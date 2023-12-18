import GeneralAppScreen from '@components/screens/GeneralAppScreen';

import StorageBoardsAppBar from './_components/StorageBoardsAppBar';
import StorageBoardsList from './_components/StorageBoardsList';
import StorageBoardsNoticeAlert from './_components/StorageBoardsNoticeAlert';
import StorageBoardsPagination from './_components/StorageBoardsPagination';
import StorageBoardsTabs from './_components/StorageBoardsTabs';

function StorageBoardsActivity() {
  return (
    <GeneralAppScreen appBar={StorageBoardsAppBar()}>
      <StorageBoardsTabs />
      <StorageBoardsNoticeAlert />
      <StorageBoardsList />
      <StorageBoardsPagination />
    </GeneralAppScreen>
  );
}

export default StorageBoardsActivity;
