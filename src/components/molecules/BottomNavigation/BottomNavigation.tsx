import { MouseEvent } from 'react';

import { Box, Typography, useTheme } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';
import { useActivity } from '@stackflow/react';

import useFlow from '@hooks/useFlow';
import type { TypeActivityNames } from '@stackflow-config';

import { StyledBottomNavigation, NavigationItem } from './BottomNavigation.styles';

function BottomNavigation() {
  const { push, replace } = useFlow();
  const { enteredBy } = useActivity();

  const {
    theme: {
      mode,
      palette: { text }
    }
  } = useTheme();

  const isEnteredHomeActivity = enteredBy.activityName === 'HomeActivity';
  const isEnteredStoragesActivity = enteredBy.activityName === 'StoragesActivity';
  const isEnteredMyActivity = enteredBy.activityName === 'MyActivity';

  const handleClick = (event: MouseEvent<HTMLLIElement>) => {
    const activityName = event.currentTarget.dataset.acitivityName as TypeActivityNames;

    if (activityName === 'MyActivity') {
      push(activityName, {});
    } else {
      replace(
        activityName,
        {},
        {
          animate: false
        }
      );
    }
  };

  return (
    <Box component="nav" customStyle={{ minHeight: 60 }}>
      <StyledBottomNavigation>
        <NavigationItem data-acitivity-name="HomeActivity" onClick={handleClick}>
          <Icon
            name={isEnteredHomeActivity ? 'HomeFilled' : 'HomeOutlined'}
            color={isEnteredHomeActivity ? 'primary' : text[mode].text2}
          />
          <Typography variant="s2" color={isEnteredHomeActivity ? 'primary' : text[mode].text2}>
            홈
          </Typography>
        </NavigationItem>
        <NavigationItem data-acitivity-name="StoragesActivity" onClick={handleClick}>
          <Icon
            name={isEnteredStoragesActivity ? 'CommunityFilled' : 'CommunityOutlined'}
            color={isEnteredStoragesActivity ? 'primary' : text[mode].text2}
          />
          <Typography variant="s2" color={isEnteredStoragesActivity ? 'primary' : text[mode].text2}>
            게시판
          </Typography>
        </NavigationItem>
        <NavigationItem data-acitivity-name="MyActivity" onClick={handleClick}>
          <Icon
            name={isEnteredMyActivity ? 'UserFilled' : 'UserOutlined'}
            color={isEnteredMyActivity ? 'primary' : text[mode].text2}
          />
          <Typography variant="s2" color={isEnteredMyActivity ? 'primary' : text[mode].text2}>
            마이
          </Typography>
        </NavigationItem>
      </StyledBottomNavigation>
    </Box>
  );
}

export default BottomNavigation;
