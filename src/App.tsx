import { useEffect } from 'react';

import ThemeProvider from '@providers/ThemeProvider';

import { Stack } from '../stackflow';

function App() {
  useEffect(() => {
    // TODO 추후 iOS Safari Swipe Back 대응 필요
    const root = document.getElementById('root');
    const handleTouchStart = (event: TouchEvent) => event.preventDefault();

    root.addEventListener('touchmove', handleTouchStart);

    return () => {
      root.removeEventListener('touchmove', handleTouchStart);
    };
  }, []);

  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
}

export default App;
