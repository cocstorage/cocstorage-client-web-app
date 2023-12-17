import { Skeleton, Typography } from '@cocstorage/ui';
import { useActivityParams } from '@stackflow/react';
import { useQuery } from '@tanstack/react-query';

import { fetchNotice } from '@apis/v1/notices';
import queryKey from '@constants/queryKey';

function NoticeContent() {
  const { id }: { id?: string } = useActivityParams();

  const { data, isPending } = useQuery({
    queryKey: queryKey.notices.notice(id),
    queryFn: () => fetchNotice(id)
  });

  if (isPending) {
    return (
      <>
        <Skeleton
          width="100%"
          height="24vh"
          round={6}
          customStyle={{ margin: '40px 0 20px' }}
          disableAspectRatio
        />
        <Skeleton
          width="80%"
          height={16}
          round={6}
          customStyle={{ marginBottom: 10 }}
          disableAspectRatio
        />
        <Skeleton
          width="40%"
          height={16}
          round={6}
          customStyle={{ marginBottom: 10 }}
          disableAspectRatio
        />
        <Skeleton
          width="60%"
          height={16}
          round={6}
          customStyle={{ marginBottom: 10 }}
          disableAspectRatio
        />
      </>
    );
  }

  return (
    <Typography
      component="article"
      lineHeight="main"
      dangerouslySetInnerHTML={{
        __html: data?.content || ''
      }}
      customStyle={{
        marginTop: 40,
        '*': {
          maxWidth: '100%',
          borderRadius: 8
        }
      }}
    />
  );
}

export default NoticeContent;
