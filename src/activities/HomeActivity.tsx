import { AppScreen } from '@stackflow/plugin-basic-ui';

import useFlow from '@hooks/useFlow';

function HomeActivity() {
  const { push } = useFlow();
  const handleClick = () => push('MyActivity', {});

  return (
    <AppScreen appBar={{ title: 'Home' }}>
      안녕하세요!
      <button type="button" onClick={handleClick}>
        마이페이지 이동
      </button>
    </AppScreen>
  );
}

export default HomeActivity;
