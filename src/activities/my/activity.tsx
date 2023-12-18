import BottomNavigation from '@components/molecules/BottomNavigation';
import GeneralAppScreen from '@components/screens/GeneralAppScreen';

import MyAppBar from './_components/MyAppBar';
import MyMenuList from './_components/MyMenuList';

function MyActivity() {
  return (
    <GeneralAppScreen appBar={MyAppBar()} bottomNavigation={<BottomNavigation />}>
      <MyMenuList />
    </GeneralAppScreen>
  );
}

export default MyActivity;
