import { PropsWithChildren, ReactNode } from 'react';

import { Box, IconButton, Typography } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';

import { HEADER_HEIGHT } from '@constants/style';
import useFlow from '@hooks/useFlow';

export interface AppBarProps {
  title?: string | ReactNode;
  height?: string;
  renderLeft?: ReactNode;
  renderRight?: ReactNode;
  backButton?: {
    render?: ReactNode;
    onClick?: () => void;
  };
  closeButton?: {
    render?: ReactNode;
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
  backButton,
  closeButton,
  borderColor,
  borderSize = '0',
  disableCloseButton
}: AppBarProps = {}) {
  const { pop, replace } = useFlow();

  const handleClick = () => {
    if (typeof backButton?.onClick === 'function') {
      backButton.onClick();
      return;
    }
    pop();
  };

  const handleClickClose = () => {
    if (typeof closeButton?.onClick === 'function') {
      closeButton.onClick();
      return;
    }
    replace('HomeActivity', {});
  };

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
      render: backButton?.render
        ? () => backButton?.render
        : () => (
            <IconButton
              onClick={handleClick}
              customStyle={{
                padding: '0 0.25rem 0 0.75rem'
              }}
            >
              <Icon name="CaretSemiLeftOutlined" />
            </IconButton>
          )
    },
    closeButton: !disableCloseButton
      ? {
          render: closeButton?.render
            ? () => closeButton?.render
            : () => (
                <IconButton
                  onClick={handleClickClose}
                  customStyle={{
                    padding: '0 0.25rem 0 0.75rem'
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

AppBar.LeftTitle = function AppBarLeftTitle({ children }: PropsWithChildren) {
  return (
    <Typography component="h1" variant="h3" fontWeight="bold" noWrap>
      {children}
    </Typography>
  );
};

export default AppBar;
