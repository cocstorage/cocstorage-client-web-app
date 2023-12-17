import { ReactNode } from 'react';

import { Box } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';

import { HEADER_HEIGHT } from '@constants/style';

export interface AppBarProps {
  title?: string | ReactNode;
  height?: string;
  renderLeft?: ReactNode;
  renderRight?: ReactNode;
  backButton?: {
    renderIcon?: ReactNode;
    onClick?: () => void;
  };
  borderColor?: string;
  borderSize?: string;
}

function AppBar({
  title,
  height = `${HEADER_HEIGHT}px`,
  renderLeft,
  renderRight,
  backButton = {
    renderIcon: <Icon name="CaretSemiLeftOutlined" />
  },
  borderColor,
  borderSize = '0'
}: AppBarProps = {}) {
  return {
    title,
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
    backButton: {
      renderIcon: () => backButton?.renderIcon,
      onClick: backButton?.onClick
    },
    borderColor,
    borderSize
  };
}

export default AppBar;
