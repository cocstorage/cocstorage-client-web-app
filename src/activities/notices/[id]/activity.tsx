import GeneralAppScreen from '@components/screens/GeneralAppScreen';

import NoticeAppBar from './_components/NoticeAppBar';
import NoticeContent from './_components/NoticeContent';
import NoticeInfo from './_components/NoticeInfo';

function NoticeActivity() {
  return (
    <GeneralAppScreen appBar={NoticeAppBar()}>
      <NoticeInfo />
      <NoticeContent />
    </GeneralAppScreen>
  );
}

export default NoticeActivity;
