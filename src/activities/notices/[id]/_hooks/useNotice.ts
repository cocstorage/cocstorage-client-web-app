import { useActivityParams } from '@stackflow/react';
import { useQuery } from '@tanstack/react-query';

import { fetchNotice } from '@apis/v1/notices';
import queryKey from '@constants/queryKey';

export default function useNotice() {
  const { id }: { id?: string } = useActivityParams();

  return useQuery({
    queryKey: queryKey.notices.notice(id),
    queryFn: () => fetchNotice(id)
  });
}
