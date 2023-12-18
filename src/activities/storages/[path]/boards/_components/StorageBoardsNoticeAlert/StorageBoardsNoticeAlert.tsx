import { Alert, Skeleton } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';
import { useQuery } from '@tanstack/react-query';

import { fetchNotices } from '@apis/v1/notices';
import queryKey from '@constants/queryKey';
import useFlow from '@hooks/useFlow';

function StorageBoardsNoticeAlert() {
  const { push } = useFlow();

  const { data, isPending } = useQuery({
    queryKey: queryKey.notices.all({
      per: 1,
      orderBy: 'latest'
    }),
    queryFn: () =>
      fetchNotices({
        per: 1,
        orderBy: 'latest'
      })
  });

  const [notice] = data?.notices || [];

  const handleClick = () =>
    push('NoticeActivity', {
      id: notice?.id
    });

  if (!isPending && !notice) return null;

  if (isPending) {
    return (
      <Skeleton
        width="100%"
        height={56}
        round={12}
        disableAspectRatio
        customStyle={{ marginTop: 14 }}
      />
    );
  }

  return (
    <Alert
      severity="info"
      icon={<Icon name="PinOutlined" />}
      action={<Icon name="CaretSemiRightOutlined" />}
      onClick={handleClick}
      customStyle={{ marginTop: 16 }}
    >
      {notice?.subject}
    </Alert>
  );
}

export default StorageBoardsNoticeAlert;
