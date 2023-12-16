import { ReactNode } from 'react';

import { Box } from '@cocstorage/ui';

import Logo from '@components/atoms/Logo';

export interface AppBarProps {
  height?: string;
  renderLeft?: ReactNode;
  renderRight?: ReactNode;
  borderSize?: string;
}

function AppBar({
  height = '50px',
  renderLeft = <Logo />,
  renderRight,
  borderSize = '0'
}: AppBarProps = {}) {
  return {
    height,
    renderLeft: () => (
      <Box
        customStyle={{
          paddingLeft: '0.75rem'
        }}
      >
        {renderLeft}
      </Box>
    ),
    renderRight: () => (
      <Box
        customStyle={{
          paddingRight: '0.75rem'
        }}
      >
        {renderRight}
      </Box>
    ),
    borderSize
  };
}

export default AppBar;
