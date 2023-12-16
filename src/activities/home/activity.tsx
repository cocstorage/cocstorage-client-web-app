import BottomNavigation from '@components/molecules/BottomNavigation';
import GeneralAppScreen from '@components/screens/GeneralAppScreen';

import HomeAppBar from './_components/HomeAppBar';
import HomeBestStorageBoardList from './_components/HomeBestStorageBoardList';
import HomeIssueKeywordRank from './_components/HomeIssueKeywordRank';
import HomeLatestStorageBoardList from './_components/HomeLatestStorageBoardList';
import HomeNoticeAlert from './_components/HomeNoticeAlert';
import HomeWorstStorageBoardList from './_components/HomeWorstStorageBoardList';

function HomeActivity() {
  return (
    <GeneralAppScreen appBar={HomeAppBar()} bottomNavigation={<BottomNavigation />}>
      <HomeNoticeAlert />
      <HomeIssueKeywordRank />
      <HomeBestStorageBoardList />
      <HomeWorstStorageBoardList />
      <HomeLatestStorageBoardList />
    </GeneralAppScreen>
  );
}

export default HomeActivity;
