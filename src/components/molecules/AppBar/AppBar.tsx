import { ReactNode } from 'react';

import { Box, IconButton } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';

import { HEADER_HEIGHT } from '@constants/style';
import useFlow from '@hooks/useFlow';

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
  disableCloseButton?: boolean;
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
  borderSize = '0',
  disableCloseButton
}: AppBarProps = {}) {
  const { replace } = useFlow();

  const handleClick = () => replace('HomeActivity', {});

  return {
    title,
    height,
    renderLeft: renderLeft
      ? () => (
          <Box
            customStyle={{
              paddingLeft: '0.75rem'
            }}
          >
            {renderLeft}
          </Box>
        )
      : undefined,
    renderRight: renderRight
      ? () => (
          <Box
            customStyle={{
              paddingRight: '0.75rem'
            }}
          >
            {renderRight}
          </Box>
        )
      : undefined,
    backButton: {
      renderIcon: () => backButton?.renderIcon,
      onClick: backButton?.onClick
    },
    closeButton: !disableCloseButton
      ? {
          render: () => (
            <IconButton
              onClick={handleClick}
              customStyle={{
                paddingLeft: '0.75rem'
              }}
            >
              <Icon name="HomeOutlined" />
            </IconButton>
          )
        }
      : undefined,
    borderColor,
    borderSize
  };
}

export default AppBar;
