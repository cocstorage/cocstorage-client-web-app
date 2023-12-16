import GeneralAppScreen from '@components/screens/GeneralAppScreen';

import HomeAppBar from './_components/HomeAppBar';
import HomeBestStorageBoardList from './_components/HomeBestStorageBoardList';
import HomeIssueKeywordRank from './_components/HomeIssueKeywordRank';
import HomeNoticeAlert from './_components/HomeNoticeAlert';
import HomeWorstStorageBoardList from './_components/HomeWorstStorageBoardList';

function HomeActivity() {
  return (
    <GeneralAppScreen appBar={HomeAppBar()}>
      <HomeNoticeAlert />
      <HomeIssueKeywordRank />
      <HomeBestStorageBoardList />
      <HomeWorstStorageBoardList />
    </GeneralAppScreen>
  );
}

export default HomeActivity;
