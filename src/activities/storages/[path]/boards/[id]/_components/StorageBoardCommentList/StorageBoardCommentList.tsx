import { Flexbox, Pagination, Skeleton, Typography } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';
import { useQuery } from '@tanstack/react-query';

import { fetchStorageBoardComments } from '@apis/v1/storage-board-comments';
import Comment from '@components/molecules/Comment';
import queryKey from '@constants/queryKey';

import useStorageBoard from '../../_hooks/useStorageBoard';

function StorageBoardCommentList() {
  const { data } = useStorageBoard();

  // TODO 추후 API 통신 환경 재구성 예정
  const { data: storageBoardCommentsData, isPending } = useQuery({
    queryKey: queryKey.storageBoardComments.all({ path: data?.storage?.id, id: data?.id }),
    queryFn: () => fetchStorageBoardComments({ path: data?.storage?.id, id: data?.id, page: 1 }),
    enabled: !!data
  });

  const totalPages = storageBoardCommentsData?.pagination?.totalPages || 1;
  const perPage = storageBoardCommentsData?.pagination?.perPage || 20;
  const currentPage = storageBoardCommentsData?.pagination.currentPage || 1;

  const handleChange = () => {
    //
  };

  const handleClick = () => () => {
    //
  };

  if (!isPending && !storageBoardCommentsData?.comments?.length) return null;

  return (
    <Flexbox component="section" direction="vertical" gap={24}>
      <Flexbox gap={4} alignment="center">
        <Icon name="CommentOutlined" width={20} height={20} />
        {isPending && <Skeleton width={40} height={20} round={6} disableAspectRatio />}
        {!isPending && (
          <Flexbox gap={6}>
            <Typography variant="h4" fontWeight="bold">
              댓글
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="primary">
              {data?.commentTotalCount?.toLocaleString()}
            </Typography>
          </Flexbox>
        )}
      </Flexbox>
      <Flexbox gap={18} direction="vertical">
        {isPending &&
          Array.from({ length: 10 })
            .map((_, index) => index)
            .map((index) => <Comment.Skeleton key={`comment-skeleton-${index}`} />)}
        {!isPending &&
          storageBoardCommentsData?.comments?.map((comment) => (
            <Comment
              key={`comment-${comment.id}`}
              comment={comment}
              onClickMenu={handleChange}
              onClickReplyListOpen={handleChange}
              onClickReplyMenu={handleClick}
            />
          ))}
        <Pagination
          count={totalPages * perPage}
          page={currentPage}
          rowPerPage={perPage}
          itemCount={5}
          onChange={handleChange}
          customStyle={{ margin: 'auto' }}
        />
      </Flexbox>
    </Flexbox>
  );
}

export default StorageBoardCommentList;
