import { Avatar, Flexbox, IconButton, Skeleton, Typography } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';
import { useActivityParams } from '@stackflow/react';
import { useQuery } from '@tanstack/react-query';

import { fetchStorage } from '@apis/v1/storages';
import AppBar from '@components/molecules/AppBar';
import queryKey from '@constants/queryKey';

function StorageBoardsAppBar() {
  const { path }: { path?: string } = useActivityParams();

  const { data, isPending } = useQuery({
    queryKey: queryKey.storages.storage(path),
    queryFn: () => fetchStorage(path)
  });

  return AppBar({
    title: (
      <Flexbox
        justifyContent="flex-start"
        gap={8}
        customStyle={{
          flexGrow: 1,
          marginLeft: -30
        }}
      >
        {isPending && (
          <>
            <Skeleton width={24} height={24} round={6} disableAspectRatio />
            <Skeleton width={55} height={24} round={6} disableAspectRatio />
          </>
        )}
        {!isPending && (
          <>
            <Avatar
              width={24}
              height={24}
              src={data?.avatarUrl || ''}
              round={6}
              alt="Storage Logo Img"
              fallback={{
                name: 'ImageOutlined',
                width: 20,
                height: 20
              }}
            />
            <Typography component="h1" variant="h3" fontWeight="bold" noWrap>
              {data?.name}
            </Typography>
          </>
        )}
      </Flexbox>
    ),
    renderRight: (
      <Flexbox gap={10} alignment="center">
        <IconButton>
          <Icon name="SearchOutlined" />
        </IconButton>
        <IconButton>
          <Icon name="StarOutlined" />
        </IconButton>
      </Flexbox>
    )
  });
}

export default StorageBoardsAppBar;
