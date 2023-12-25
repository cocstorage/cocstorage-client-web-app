import { PropsWithChildren, ReactNode, useLayoutEffect, useRef } from 'react';

import { useTheme } from '@cocstorage/ui';
import { AppScreen, AppScreenProps } from '@stackflow/plugin-basic-ui';

import { AppScreenInner, AppScreenContent } from './GeneralAppScreen.styles';

interface GeneralAppScreenProps extends AppScreenProps {
  bottomNavigation?: ReactNode;
}

function GeneralAppScreen({
  children,
  appBar,
  bottomNavigation
}: PropsWithChildren<GeneralAppScreenProps>) {
  const {
    theme: {
      palette: { background }
    }
  } = useTheme();

  const appScreenContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (appScreenContentRef.current) {
      window.appScreenContent = appScreenContentRef.current;
    }
  }, []);

  return (
    <AppScreen appBar={appBar} backgroundColor={background.bg}>
      <AppScreenInner>
        <AppScreenContent ref={appScreenContentRef}>{children}</AppScreenContent>
        {bottomNavigation}
      </AppScreenInner>
    </AppScreen>
  );
}

export default GeneralAppScreen;
