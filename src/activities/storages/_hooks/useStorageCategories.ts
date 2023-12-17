import { useQuery } from '@tanstack/react-query';

import { fetchStorageCategories } from '@apis/v1/storage-categories';
import queryKey from '@constants/queryKey';

export default function useStorageCategories() {
  return useQuery({
    queryKey: queryKey.storageCategories.all,
    queryFn: () => fetchStorageCategories()
  });
}
