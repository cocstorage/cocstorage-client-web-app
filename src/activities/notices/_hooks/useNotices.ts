import { useQuery } from '@tanstack/react-query';

import { fetchNotices } from '@apis/v1/notices';
import queryKey from '@constants/queryKey';

export default function useNotices() {
  return useQuery({
    queryKey: queryKey.notices.all({
      orderBy: 'latest'
    }),
    queryFn: () =>
      fetchNotices({
        orderBy: 'latest'
      })
  });
}
