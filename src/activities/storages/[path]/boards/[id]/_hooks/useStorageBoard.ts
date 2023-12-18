import { useActivityParams } from '@stackflow/react';
import { useQuery } from '@tanstack/react-query';

import { fetchStorageBoard } from '@apis/v1/storage-boards';
import queryKey from '@constants/queryKey';

import useStorage from './useStorage';

export default function useStorageBoard() {
  const { id }: { id?: string } = useActivityParams();

  const { data } = useStorage();

  return useQuery({
    queryKey: queryKey.storageBoards.storageBoard({ path: data?.id, id }),
    queryFn: () => fetchStorageBoard({ path: data?.id, id }),
    enabled: !!data
  });
}
