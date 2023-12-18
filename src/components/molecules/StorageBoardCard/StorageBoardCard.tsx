import {
  Avatar,
  Badge,
  Box,
  Flexbox,
  GenericComponentProps,
  Image,
  Skeleton,
  Typography,
  useTheme
} from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';
import dayjs from 'dayjs';

import useFlow from '@hooks/useFlow';
import { StorageBoard } from '@schemas/v1/storage-boards/response';

import {
  Dot,
  Info,
  InfoLabel,
  Storage,
  StyledStorageBoardCard,
  UserInfo,
  Wrapper
} from './StorageBoardCard.styles';

export interface StorageBoardCardProps extends GenericComponentProps<unknown> {
  variant?: 'normal' | 'compact';
  storageBoard?: StorageBoard;
  hideSymbolismBadge?: boolean;
  inStorage?: boolean;
  highLiteSubject?: string;
  onClick?: () => void;
}

function StorageBoardCard({
  variant = 'compact',
  storageBoard,
  hideSymbolismBadge = false,
  inStorage = true,
  highLiteSubject = '',
  onClick,
  customStyle
}: StorageBoardCardProps) {
  const { push } = useFlow();

  const {
    theme: {
      mode,
      palette: { primary, text }
    }
  } = useTheme();

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
      return;
    }

    push('StorageBoardActivity', {
      path: storageBoard?.storage?.id,
      id: storageBoard?.id
    });
  };

  const {
    user,
    storage,
    nickname,
    subject,
    viewCount = 0,
    commentTotalCount = 0,
    thumbUp = 0,
    thumbDown = 0,
    thumbnailUrl,
    isPopular,
    isWorst,
    createdAt
  } = storageBoard || {};
  const round = variant === 'normal' ? 6 : 8;

  if (variant === 'normal') {
    return (
      <StyledStorageBoardCard onClick={handleClick}>
        <Wrapper variant={variant} hasThumbnail={!!thumbnailUrl} css={customStyle}>
          <Box customStyle={{ borderRadius: round, overflow: 'hidden', zIndex: 1 }}>
            <Image
              ratio="4:3"
              src={thumbnailUrl || ''}
              alt="Thumbnail Img"
              width={82}
              height="auto"
              round={round}
            />
          </Box>
          <Flexbox
            direction="vertical"
            justifyContent="space-between"
            gap={8}
            customStyle={{ height: '100%' }}
          >
            <Typography className="subject" noWrap lineClamp={2} customStyle={{ flex: 1 }}>
              {dayjs().diff(createdAt, 'day') <= 1 && (
                <Badge severity="success" customStyle={{ marginRight: 4, verticalAlign: 'bottom' }}>
                  NEW
                </Badge>
              )}
              {!hideSymbolismBadge && isPopular && (
                <Badge
                  severity="info"
                  icon={<Icon name="ThumbsUpFilled" width={12} height={12} />}
                  iconOnly
                  customStyle={{
                    marginRight: 4,
                    verticalAlign: 'middle'
                  }}
                />
              )}
              {!hideSymbolismBadge && isWorst && (
                <Badge
                  severity="error"
                  icon={<Icon name="ThumbsDownFilled" width={12} height={12} />}
                  iconOnly
                  customStyle={{
                    marginRight: 4,
                    verticalAlign: 'middle'
                  }}
                />
              )}
              {subject}
            </Typography>
            <Info>
              <InfoLabel>
                <Icon name="ViewOutlined" width={16} height={16} />
                <Typography variant="s2">{viewCount.toLocaleString()}</Typography>
              </InfoLabel>
              <InfoLabel>
                <Icon name="CommentOutlined" width={16} height={16} />
                <Typography variant="s2">{commentTotalCount.toLocaleString()}</Typography>
              </InfoLabel>
              {isWorst && (
                <InfoLabel>
                  <Icon name="ThumbsDownOutlined" width={16} height={16} />
                  <Typography variant="s2">{thumbDown.toLocaleString()}</Typography>
                </InfoLabel>
              )}
              {!isWorst && (
                <InfoLabel>
                  <Icon name="ThumbsUpOutlined" width={16} height={16} />
                  <Typography variant="s2">{thumbUp.toLocaleString()}</Typography>
                </InfoLabel>
              )}
              <Storage>
                {storage?.avatarUrl && (
                  <Avatar
                    width={14}
                    height={14}
                    src={storage?.avatarUrl || ''}
                    alt="Storage Logo Img"
                    round={6}
                  />
                )}
                <Typography variant="s2" color={text[mode].text1}>
                  {storage?.name}
                </Typography>
              </Storage>
            </Info>
          </Flexbox>
        </Wrapper>
      </StyledStorageBoardCard>
    );
  }

  return (
    <StyledStorageBoardCard onClick={handleClick}>
      <Wrapper variant={variant} hasThumbnail={!!thumbnailUrl} css={customStyle}>
        <Flexbox
          direction="vertical"
          justifyContent="space-between"
          gap={6}
          customStyle={{ height: '100%' }}
        >
          <Flexbox gap={4} alignment="center">
            {dayjs().diff(createdAt, 'day') <= 1 && <Badge severity="success">NEW</Badge>}
            {!hideSymbolismBadge && isPopular && (
              <Badge
                severity="info"
                icon={<Icon name="ThumbsUpFilled" width={12} height={12} />}
                iconOnly
              />
            )}
            {!hideSymbolismBadge && isWorst && (
              <Badge
                severity="error"
                icon={<Icon name="ThumbsDownFilled" width={12} height={12} />}
                iconOnly
              />
            )}
            <Typography
              className="subject"
              noWrap
              lineClamp={1}
              customStyle={{
                flex: 1,
                textAlign: 'left',
                '& > b': {
                  fontWeight: 700,
                  color: primary.main
                }
              }}
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                __html: subject?.replace(highLiteSubject, `<b>${highLiteSubject}</b>`)
              }}
            />
          </Flexbox>
          <Info>
            <InfoLabel>
              <Icon name="ViewOutlined" width={14} height={14} />
              <Typography variant="s2">{viewCount.toLocaleString()}</Typography>
            </InfoLabel>
            <InfoLabel>
              <Icon name="CommentOutlined" width={14} height={14} />
              <Typography variant="s2">{commentTotalCount.toLocaleString()}</Typography>
            </InfoLabel>
            {isWorst && (
              <InfoLabel>
                <Icon name="ThumbsDownOutlined" width={14} height={14} />
                <Typography variant="s2">{thumbDown.toLocaleString()}</Typography>
              </InfoLabel>
            )}
            {!isWorst && (
              <InfoLabel>
                <Icon name="ThumbsUpOutlined" width={14} height={14} />
                <Typography variant="s2">{thumbUp.toLocaleString()}</Typography>
              </InfoLabel>
            )}
            {!inStorage && (
              <Storage>
                {storage?.avatarUrl && (
                  <Avatar
                    width={14}
                    height={14}
                    src={storage?.avatarUrl || ''}
                    alt="Storage Logo Img"
                    round={6}
                  />
                )}
                <Typography variant="s2" color={text[mode].text1}>
                  {storage?.name}
                </Typography>
              </Storage>
            )}
            {inStorage && (
              <UserInfo>
                <Flexbox gap={4} alignment="center">
                  {user?.avatarUrl && (
                    <Avatar
                      src={user?.avatarUrl || ''}
                      alt="User Avatar Img"
                      width={14}
                      height={14}
                    />
                  )}
                  <Typography variant="s2" color={text[mode].text1}>
                    {user?.nickname || nickname}
                  </Typography>
                </Flexbox>
                <Dot />
                <Typography variant="s2" color={text[mode].text1}>
                  {dayjs(createdAt).fromNow()}
                </Typography>
              </UserInfo>
            )}
          </Info>
        </Flexbox>
        {thumbnailUrl && (
          <Box customStyle={{ borderRadius: round, overflow: 'hidden', zIndex: 1 }}>
            <Image
              ratio="16:9"
              src={thumbnailUrl || ''}
              alt="Thumbnail Img"
              width={61}
              height="auto"
              round={round}
            />
          </Box>
        )}
      </Wrapper>
    </StyledStorageBoardCard>
  );
}

StorageBoardCard.Skeleton = function StorageBoardCardSkeleton({
  variant,
  customStyle
}: Pick<StorageBoardCardProps, 'variant' | 'customStyle'>) {
  if (variant === 'normal') {
    return (
      <Wrapper variant={variant} hasThumbnail css={customStyle}>
        <Skeleton ratio="4:3" maxWidth={82} round={8} />
        <Flexbox
          direction="vertical"
          justifyContent="space-between"
          gap={6}
          customStyle={{ height: '100%' }}
        >
          <Skeleton width="100%" maxWidth={200} height={17.5} round={6} disableAspectRatio />
          <Flexbox gap={12}>
            <Skeleton width={30} height={16} round={6} disableAspectRatio />
            <Skeleton width={30} height={16} round={6} disableAspectRatio />
            <Skeleton width={30} height={16} round={6} disableAspectRatio />
            <Skeleton width={50} height={16} round={6} disableAspectRatio />
          </Flexbox>
        </Flexbox>
      </Wrapper>
    );
  }

  return (
    <Wrapper variant={variant} hasThumbnail css={customStyle}>
      <Flexbox direction="vertical" gap={6}>
        <Skeleton width="100%" maxWidth={200} height={17.5} round={6} disableAspectRatio />
        <Flexbox gap={12}>
          <Skeleton width={30} height={14} round={6} disableAspectRatio />
          <Skeleton width={30} height={14} round={6} disableAspectRatio />
          <Skeleton width={30} height={14} round={6} disableAspectRatio />
          <Skeleton width={50} height={14} round={6} disableAspectRatio />
        </Flexbox>
      </Flexbox>
      <Skeleton ratio="16:9" round={8} />
    </Wrapper>
  );
};

export default StorageBoardCard;
