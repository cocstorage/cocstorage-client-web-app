import { PropsWithChildren } from 'react';

import { useTheme } from '@cocstorage/ui';
import { HelmetProvider as AsyncHelmetProvider, Helmet } from 'react-helmet-async';

function HelmetProvider({ children }: PropsWithChildren) {
  const {
    theme: {
      palette: { background }
    }
  } = useTheme();

  return (
    <AsyncHelmetProvider>
      <Helmet>
        <meta name="theme-color" content={background.bg} />
      </Helmet>
      {children}
    </AsyncHelmetProvider>
  );
}

export default HelmetProvider;
