import { Flexbox, IconButton } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';

import AppBar from '@components/molecules/AppBar';

function HomeAppBar() {
  return AppBar({
    renderRight: (
      <Flexbox gap={10}>
        <IconButton>
          <Icon name="WriteOutlined" />
        </IconButton>
        <IconButton>
          <Icon name="LoudSpeakerOutlined" />
        </IconButton>
        <IconButton>
          <Icon name="SearchOutlined" />
        </IconButton>
      </Flexbox>
    )
  });
}

export default HomeAppBar;
