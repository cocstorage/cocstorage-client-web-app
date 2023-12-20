import GeneralAppScreen from '@components/screens/GeneralAppScreen';

import NoticesAppBar from './_components/NoticesAppBar';
import NoticesList from './_components/NoticesList';
import NoticesPagination from './_components/NoticesPagination';

function NoticesActivity() {
  return (
    <GeneralAppScreen appBar={NoticesAppBar()}>
      <NoticesList />
      <NoticesPagination />
    </GeneralAppScreen>
  );
}

export default NoticesActivity;
