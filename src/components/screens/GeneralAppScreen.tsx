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
      <Content>{children}</Content>
    </AppScreen>
  );
}

const Content = styled.div`
  padding: 0 20px;
  height: 100%;
`;

export default GeneralAppScreen;
