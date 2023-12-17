import { Box, Typography, useTheme } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';

import useFlow from '@hooks/useFlow';
import type { TypeActivityNames } from '@stackflow';

import { StyledBottomNavigation, NavigationItem } from './BottomNavigation.styles';

function BottomNavigation() {
  const { replace } = useFlow();

  const {
    theme: {
      mode,
      palette: { text }
    }
  } = useTheme();

  const handleClick = (activityName: TypeActivityNames) => () =>
    replace(
      activityName,
      {},
      {
        animate: false
      }
    );

  return (
    <Box component="nav" customStyle={{ minHeight: 60 }}>
      <StyledBottomNavigation>
        <NavigationItem onClick={handleClick('HomeActivity')}>
          <Icon name="HomeFilled" color="primary" />
          <Typography variant="s2" color="primary">
            홈
          </Typography>
        </NavigationItem>
        <NavigationItem onClick={handleClick('StoragesActivity')}>
          <Icon name="CommunityOutlined" color={text[mode].text2} />
          <Typography variant="s2" color={text[mode].text2}>
            게시판
          </Typography>
        </NavigationItem>
        <NavigationItem onClick={handleClick('StoragesActivity')}>
          <Icon name="UserOutlined" color={text[mode].text2} />
          <Typography variant="s2" color={text[mode].text2}>
            마이
          </Typography>
        </NavigationItem>
      </StyledBottomNavigation>
    </Box>
  );
}

export default BottomNavigation;
