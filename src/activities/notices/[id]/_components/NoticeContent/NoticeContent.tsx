import { Skeleton, Typography } from '@cocstorage/ui';

import useNotice from '../../_hooks/useNotice';

function NoticeContent() {
  const { data, isPending } = useNotice();

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
