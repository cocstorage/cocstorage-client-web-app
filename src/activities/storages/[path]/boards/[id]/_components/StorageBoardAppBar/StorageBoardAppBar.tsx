import { Avatar } from '@cocstorage/ui';

import AppBar from '@components/molecules/AppBar';
import getImageName from '@utils/getImageName';

import useStorage from '../../_hooks/useStorage';

function StorageBoardAppBar() {
  const { data } = useStorage();

  return AppBar({
    renderRight: (
      <Avatar
        width={24}
        height={24}
        src={data?.avatarUrl || ''}
        alt={getImageName(data?.avatarUrl)}
        round={6}
        fallback={{
          name: 'ImageOutlined',
          width: 20,
          height: 20
        }}
      />
    )
  });
}

export default StorageBoardAppBar;
