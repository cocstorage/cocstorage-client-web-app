import { useEffect } from 'react';

import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';

import QueryClientProvider from '@providers/QueryClientProvider';
import ThemeProvider from '@providers/ThemeProvider';

import { Stack } from '../stackflow';

import 'dayjs/locale/ko';

dayjs.locale('ko');
dayjs.extend(RelativeTime);

function App() {
  useEffect(() => {
    const root = document.getElementById('root');
    const handleTouchStart = (event: TouchEvent) => {
      const target = event.target as HTMLDivElement;
      // TODO stackflow 에서 생성하는 상위 부모 요소들을 명확하게 추적할 수 있는 방법 고민
      const isPreventDefault =
        target.className.indexOf('dh') !== -1 || target.className.indexOf('_1') !== -1;
      if (isPreventDefault) {
        event.preventDefault();
      }
    };

    root?.addEventListener('touchmove', handleTouchStart);

    return () => {
      root?.removeEventListener('touchmove', handleTouchStart);
    };
  }, []);

  return (
    <QueryClientProvider>
      <ThemeProvider>
        <Stack />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
