import { useActivityParams } from '@stackflow/react';
import { useQuery } from '@tanstack/react-query';

import { fetchStorageBoards } from '@apis/v1/storage-boards';
import queryKey from '@constants/queryKey';

export default function useStorageBoards() {
  const { path }: { path?: string } = useActivityParams();

  return useQuery({
    queryKey: queryKey.storageBoards.all({
      path
    }),
    queryFn: () =>
      fetchStorageBoards({
        path,
        orderBy: 'latest'
      }),
    placeholderData: (previousData) => previousData
  });
}
