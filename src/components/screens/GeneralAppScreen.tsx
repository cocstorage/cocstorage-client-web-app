import { PropsWithChildren } from 'react';

import { useTheme } from '@cocstorage/ui';
import styled from '@emotion/styled';
import { AppScreen } from '@stackflow/plugin-basic-ui';

import type AppBar from '@components/molecules/AppBar';

interface GeneralAppScreenProps {
  appBar?: ReturnType<typeof AppBar>;
}

function GeneralAppScreen({ children, appBar }: PropsWithChildren<GeneralAppScreenProps>) {
  const {
    theme: {
      palette: { background }
    }
  } = useTheme();

  return (
    <AppScreen appBar={appBar} backgroundColor={background.bg}>
      <AppScreenInner>
        <Content>{children}</Content>
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
  flex-grow: 1;
  padding: 0 1.25rem;
`;

export default GeneralAppScreen;
