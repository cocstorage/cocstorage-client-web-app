import GeneralAppScreen from '@components/screens/GeneralAppScreen';

import HomeAppBar from './_components/HomeAppBar';
import HomeNoticeAlert from './_components/HomeNoticeAlert';

function HomeActivity() {
  return (
    <GeneralAppScreen appBar={HomeAppBar()}>
      <HomeNoticeAlert />
    </GeneralAppScreen>
  );
}

export default HomeActivity;
