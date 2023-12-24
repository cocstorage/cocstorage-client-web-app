import { IconButton } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';

import AppBar from '@components/molecules/AppBar';

function StoragesAppBar() {
  return AppBar({
    renderLeft: <AppBar.LeftTitle>게시판</AppBar.LeftTitle>,
    renderRight: (
      <IconButton>
        <Icon name="SearchOutlined" />
      </IconButton>
    ),
    disableCloseButton: true
  });
}

export default StoragesAppBar;
