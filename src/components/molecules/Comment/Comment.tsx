import { Avatar, Box, Button, Flexbox, Skeleton, Typography, useTheme } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';
import dayjs from 'dayjs';

import { NoticeCommentReply } from '@schemas/v1/notice-comment-replies/response';
import { NoticeComment } from '@schemas/v1/notice-comments/response';
import { StorageBoardCommentReply } from '@schemas/v1/storage-board-comment-replies/response';
import { StorageBoardComment } from '@schemas/v1/storage-board-comments/response';
import getImageName from '@utils/getImageName';

interface CommentProps {
  comment: StorageBoardComment | NoticeComment;
  hideReplies?: boolean;
  onClickReplyListOpen: () => void;
  onClickMenu: () => void;
  onClickReplyMenu: (commentId: number, replyId: number) => () => void;
}

function Comment({
  comment: { id, user, nickname, content = '', replies, createdAt, createdIp, isMember },
  hideReplies,
  onClickReplyListOpen,
  onClickMenu,
  onClickReplyMenu
}: CommentProps) {
  const {
    theme: {
      mode,
      palette: { text }
    }
  } = useTheme();

  return (
    <Flexbox direction="vertical" customStyle={{ flex: 1 }}>
      <Flexbox gap={10}>
        <Avatar
          width={30}
          height={30}
          src={(user || {}).avatarUrl || ''}
          alt={getImageName((user || {}).avatarUrl)}
          fallback={{
            width: 15,
            height: 15
          }}
        />
        <Flexbox direction="vertical" customStyle={{ flex: 1 }}>
          <Flexbox gap={4} alignment="center">
            <Typography variant="s1" fontWeight="bold">
              {nickname || (user || {}).nickname}
            </Typography>
            {!user && createdIp && (
              <Typography variant="s2" color={text[mode].text1}>
                ({createdIp})
              </Typography>
            )}
          </Flexbox>
          <Typography
            lineHeight="main"
            customStyle={{ marginTop: 4, wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}
          >
            {content}
          </Typography>
        </Flexbox>
        {!isMember && (
          <Flexbox alignment="flex-start">
            <Button
              variant="transparent"
              size="pico"
              startIcon={<Icon name="MoreMenuOutlined" width={15} height={15} />}
              onClick={onClickMenu}
              iconOnly
            />
          </Flexbox>
        )}
      </Flexbox>
      <Flexbox direction="vertical" gap={15} customStyle={{ margin: '8px 0 0 40px' }}>
        <Flexbox gap={12} alignment="center">
          <Typography
            variant="s1"
            customStyle={{
              color: text[mode].text1
            }}
          >
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography
            variant="s1"
            onClick={onClickReplyListOpen}
            customStyle={{ cursor: 'pointer', color: text[mode].text1 }}
          >
            {replies.length > 0 ? `답글 ${replies.length.toLocaleString()}개` : '답글달기'}
          </Typography>
        </Flexbox>
        {replies.length > 0 && (
          <Flexbox direction="vertical" gap={18}>
            {replies.slice(0, 3).map((reply) => (
              <Comment.Reply
                key={`comment-simple-reply-${reply.id}`}
                reply={reply}
                onClickMenu={onClickReplyMenu(id, reply.id)}
                disablePadding
              />
            ))}
          </Flexbox>
        )}
        {!hideReplies && replies.length > 3 && (
          <Flexbox gap={10} alignment="center">
            <Box customStyle={{ width: 24, height: 1, backgroundColor: text[mode].text3 }} />
            <Typography
              variant="s1"
              customStyle={{
                color: text[mode].text1,
                cursor: 'pointer'
              }}
              onClick={onClickReplyListOpen}
            >
              {`답글 ${(replies.length - 3).toLocaleString()}개 더 보기`}
            </Typography>
          </Flexbox>
        )}
      </Flexbox>
    </Flexbox>
  );
}

Comment.Skeleton = function CommentSkeleton() {
  return (
    <Flexbox gap={10} customStyle={{ flex: 1 }}>
      <Skeleton width={30} height={30} disableAspectRatio round="50%" />
      <Flexbox direction="vertical" gap={4} customStyle={{ flex: 1 }}>
        <Skeleton width="100%" maxWidth={50} height={15} round={6} disableAspectRatio />
        <Flexbox direction="vertical" gap={8}>
          <Skeleton width="100%" maxWidth={200} height={18} round={6} disableAspectRatio />
          <Skeleton width="100%" maxWidth={120} height={18} round={6} disableAspectRatio />
          <Skeleton width="100%" maxWidth={150} height={18} round={6} disableAspectRatio />
        </Flexbox>
        <Flexbox direction="vertical" gap={15} customStyle={{ marginTop: 8 }}>
          <Flexbox gap={12} alignment="center">
            <Skeleton width={30} height={15} round={6} disableAspectRatio />
            <Skeleton width={40} height={15} round={6} disableAspectRatio />
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
};

Comment.Reply = function CommentReply({
  reply: { user, nickname, content, createdIp, createdAt, isMember },
  onClickMenu,
  disablePadding
}: {
  reply: StorageBoardCommentReply | NoticeCommentReply;
  onClickMenu: () => void;
  disablePadding?: boolean;
}) {
  const {
    theme: {
      mode,
      palette: { text }
    }
  } = useTheme();

  return (
    <Flexbox gap={10} customStyle={{ padding: disablePadding ? undefined : '0 20px' }}>
      <Avatar
        width={30}
        height={30}
        src={(user || {}).avatarUrl || ''}
        alt={getImageName((user || {}).avatarUrl)}
        fallback={{
          width: 15,
          height: 15
        }}
      />
      <Flexbox direction="vertical" customStyle={{ flex: 1 }}>
        <Flexbox gap={4} alignment="center">
          <Typography variant="s1" fontWeight="bold">
            {nickname || (user || {}).nickname}
          </Typography>
          {!user && createdIp && (
            <Typography variant="s2" color={text[mode].text1}>
              ({createdIp})
            </Typography>
          )}
        </Flexbox>
        <Typography
          lineHeight="main"
          customStyle={{ marginTop: 4, wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}
        >
          {content}
        </Typography>
        <Flexbox direction="vertical" gap={15} customStyle={{ marginTop: 8 }}>
          <Flexbox gap={12} alignment="center">
            <Typography
              variant="s1"
              customStyle={{
                color: text[mode].text1
              }}
            >
              {dayjs(createdAt).fromNow()}
            </Typography>
          </Flexbox>
        </Flexbox>
      </Flexbox>
      {!isMember && (
        <Flexbox alignment="flex-start">
          <Button
            variant="transparent"
            size="pico"
            startIcon={<Icon name="MoreMenuOutlined" width={15} height={15} />}
            onClick={onClickMenu}
            iconOnly
          />
        </Flexbox>
      )}
    </Flexbox>
  );
};

export default Comment;
