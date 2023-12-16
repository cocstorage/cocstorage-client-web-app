import { PropsWithChildren, ReactNode } from 'react';

import { useTheme } from '@cocstorage/ui';
import styled from '@emotion/styled';
import { AppScreen } from '@stackflow/plugin-basic-ui';

import type AppBar from '@components/molecules/AppBar';

interface GeneralAppScreenProps {
  appBar?: ReturnType<typeof AppBar>;
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

  return (
    <AppScreen appBar={appBar} backgroundColor={background.bg}>
      <AppScreenInner>
        <Content>{children}</Content>
        {bottomNavigation}
      </AppScreenInner>
    </AppScreen>
  );
}

const AppScreenInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  padding: 0 1.25rem;
  overflow-y: auto;
`;

export default GeneralAppScreen;
