import { IconButton } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';
import { useActivity } from '@stackflow/react';

import AppBar from '@components/molecules/AppBar';
import useFlow from '@hooks/useFlow';

function NoticeAppBar() {
  const { replace } = useFlow();
  const { isRoot } = useActivity();

  const handleClick = () => replace('HomeActivity', {});

  return AppBar({
    renderLeft: isRoot ? (
      <IconButton onClick={handleClick}>
        <Icon name="HomeOutlined" />
      </IconButton>
    ) : undefined
  });
}

export default NoticeAppBar;
