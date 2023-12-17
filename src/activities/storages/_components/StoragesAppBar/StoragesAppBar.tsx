import { IconButton, Typography } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';

import AppBar from '@components/molecules/AppBar';

function StoragesAppBar() {
  return AppBar({
    renderLeft: (
      <Typography component="h1" variant="h3" fontWeight="bold" noWrap>
        게시판
      </Typography>
    ),
    renderRight: (
      <IconButton>
        <Icon name="SearchOutlined" />
      </IconButton>
    ),
    disableCloseButton: true
  });
}

export default StoragesAppBar;
