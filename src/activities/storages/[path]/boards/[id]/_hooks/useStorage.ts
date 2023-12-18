import { useActivityParams } from '@stackflow/react';
import { useQuery } from '@tanstack/react-query';

import { fetchStorage } from '@apis/v1/storages';
import queryKey from '@constants/queryKey';

export default function useStorage() {
  const { path }: { path?: string } = useActivityParams();

  return useQuery({
    queryKey: queryKey.storages.storage(path),
    queryFn: () => fetchStorage(path)
  });
}
