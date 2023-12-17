import BottomNavigation from '@components/molecules/BottomNavigation';
import GeneralAppScreen from '@components/screens/GeneralAppScreen';

import StoragesAlert from './_components/StoragesAlert';
import StoragesAppBar from './_components/StoragesAppBar';
import StoragesCategoryList from './_components/StoragesCategoryList';
import StoragesGrid from './_components/StoragesGrid';

function StoragesActivity() {
  return (
    <GeneralAppScreen appBar={StoragesAppBar()} bottomNavigation={<BottomNavigation />}>
      <StoragesAlert />
      <StoragesCategoryList />
      <StoragesGrid />
    </GeneralAppScreen>
  );
}

export default StoragesActivity;
