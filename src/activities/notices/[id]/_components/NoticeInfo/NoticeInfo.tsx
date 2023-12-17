import { Avatar, Box, Flexbox, Skeleton, Typography, useTheme } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';
import { useActivityParams } from '@stackflow/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { fetchNotice } from '@apis/v1/notices';
import queryKey from '@constants/queryKey';

import { Info } from './NoticeInfo.styles';

function NoticeInfo() {
  const { id }: { id?: string } = useActivityParams();
  const {
    theme: {
      mode,
      palette: { text }
    }
  } = useTheme();

  const { data, isPending } = useQuery({
    queryKey: queryKey.notices.notice(id),
    queryFn: () => fetchNotice(id)
  });

  const { user, viewCount, createdAt } = data || {};

  return (
    <Box component="section" customStyle={{ marginTop: 10 }}>
      {isPending && <Skeleton width="60%" height={22} round={6} disableAspectRatio />}
      {!isPending && (
        <Typography component="h1" variant="h3" fontWeight="bold">
          {data?.subject}
        </Typography>
      )}
      {isPending && (
        <Box customStyle={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
          <Skeleton width={24} height={24} round="50%" disableAspectRatio />
          <Skeleton
            width="30%"
            height={16}
            round={6}
            customStyle={{ marginLeft: 4 }}
            disableAspectRatio
          />
        </Box>
      )}
      {!isPending && (
        <Info>
          <Flexbox alignment="center">
            <Avatar
              width={24}
              height={24}
              src={user?.avatarUrl || ''}
              alt="User Avatar Img"
              fallback={{
                width: 12,
                height: 12
              }}
            />
            <Typography variant="s1" color={text[mode].text1} customStyle={{ marginLeft: 4 }}>
              {user?.nickname}
            </Typography>
          </Flexbox>
          <Typography variant="s1" color={text[mode].text1}>
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Flexbox alignment="center" customStyle={{ marginLeft: 10 }}>
            <Icon width={16} height={16} name="ViewOutlined" color={text[mode].text1} />
            <Typography variant="s2" color={text[mode].text1} customStyle={{ marginLeft: 2 }}>
              {viewCount?.toLocaleString()}
            </Typography>
          </Flexbox>
        </Info>
      )}
    </Box>
  );
}

export default NoticeInfo;
