import { Avatar, Badge, Flexbox, Image, Skeleton, Typography, useTheme } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';
import dayjs from 'dayjs';

import useFlow from '@hooks/useFlow';
import { Notice } from '@schemas/v1/notices/response';
import getImageName from '@utils/getImageName';

import { Dot, Info, InfoLabel, StyledNoticeCard, UserInfo, Wrapper } from './NoticeCard.styles';

export interface NoticeCardProps {
  notice: Notice;
  onClick?: () => void;
}

function NoticeCard({
  notice: { id, user, subject, viewCount = 0, commentTotalCount = 0, thumbnailUrl, createdAt },
  onClick
}: NoticeCardProps) {
  const { push } = useFlow();

  const {
    theme: {
      mode,
      palette: { text }
    }
  } = useTheme();

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
      return;
    }

    push('NoticeActivity', {
      id
    });
  };

  return (
    <StyledNoticeCard onClick={handleClick}>
      <Wrapper>
        <Image
          ratio="4:3"
          width={82}
          height="auto"
          src={thumbnailUrl || ''}
          alt={getImageName(thumbnailUrl)}
          round={6}
        />
        <Flexbox
          direction="vertical"
          justifyContent="space-between"
          gap={8}
          customStyle={{ height: '100%' }}
        >
          <Typography className="subject" noWrap lineClamp={2} customStyle={{ flex: 1 }}>
            {dayjs().diff(createdAt, 'day') <= 1 && (
              <Badge severity="success" customStyle={{ marginRight: 4, verticalAlign: 'middle' }}>
                NEW
              </Badge>
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
            <UserInfo>
              <Flexbox gap={4} alignment="center">
                {user?.avatarUrl && (
                  <Avatar
                    width={14}
                    height={14}
                    src={user?.avatarUrl || ''}
                    alt={getImageName(user?.avatarUrl)}
                  />
                )}
                <Typography variant="s2" color={text[mode].text1}>
                  {user?.nickname}
                </Typography>
              </Flexbox>
              <Dot />
              <Typography variant="s2" color={text[mode].text1}>
                {dayjs(createdAt).fromNow()}
              </Typography>
            </UserInfo>
          </Info>
        </Flexbox>
      </Wrapper>
    </StyledNoticeCard>
  );
}

NoticeCard.Skeleton = function NoticeCardSkeleton() {
  return (
    <StyledNoticeCard>
      <Wrapper>
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
    </StyledNoticeCard>
  );
};

export default NoticeCard;
