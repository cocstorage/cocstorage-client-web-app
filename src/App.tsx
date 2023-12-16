import { useEffect } from 'react';

import QueryClientProvider from '@providers/QueryClientProvider';
import ThemeProvider from '@providers/ThemeProvider';

import { Stack } from '../stackflow';

function App() {
  useEffect(() => {
    // TODO 추후 iOS Safari Swipe Back 대응 필요
    const root = document.getElementById('root');
    const handleTouchStart = (event: TouchEvent) => event.preventDefault();

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
