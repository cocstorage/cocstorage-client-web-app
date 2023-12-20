import { Flexbox } from '@cocstorage/ui';

import NoticeCard from '@components/molecules/NoticeCard';

import useNotices from '../../_hooks/useNotices';

function NoticesList() {
  const { data, isPending } = useNotices();

  return (
    <Flexbox component="section" gap={18} direction="vertical" customStyle={{ marginTop: 20 }}>
      {isPending &&
        Array.from({ length: 20 })
          .map((_, index) => index)
          .map((index) => <NoticeCard.Skeleton key={`notice-skeleton-${index}`} />)}
      {!isPending &&
        data?.notices?.map((notice) => <NoticeCard key={`notice-${notice.id}`} notice={notice} />)}
    </Flexbox>
  );
}

export default NoticesList;
