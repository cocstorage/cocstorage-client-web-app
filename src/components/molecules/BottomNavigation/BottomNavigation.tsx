import { Box, Typography, useTheme } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';

import { StyledBottomNavigation, NavigationItem } from './BottomNavigation.styles';

function BottomNavigation() {
  const {
    theme: {
      mode,
      palette: { text }
    }
  } = useTheme();

  return (
    <Box component="nav" customStyle={{ minHeight: 60 }}>
      <StyledBottomNavigation>
        <NavigationItem data-pathname="/">
          <Icon name="HomeFilled" color="primary" />
          <Typography variant="s2" color="primary">
            홈
          </Typography>
        </NavigationItem>
        <NavigationItem data-pathname="/storages">
          <Icon name="CommunityOutlined" color={text[mode].text2} />
          <Typography variant="s2" color={text[mode].text2}>
            게시판
          </Typography>
        </NavigationItem>
        <NavigationItem data-pathname="/my">
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
