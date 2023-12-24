import { Avatar, Box, Flexbox, Skeleton, Typography, useTheme } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';
import dayjs from 'dayjs';

import getImageName from '@utils/getImageName';

import { Info } from './NoticeInfo.styles';
import useNotice from '../../_hooks/useNotice';

function NoticeInfo() {
  const {
    theme: {
      mode,
      palette: { text }
    }
  } = useTheme();

  const { data, isPending } = useNotice();

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
              src={data?.user?.avatarUrl || ''}
              alt={getImageName(data?.user?.avatarUrl)}
              fallback={{
                width: 12,
                height: 12
              }}
            />
            <Typography variant="s1" color={text[mode].text1} customStyle={{ marginLeft: 4 }}>
              {data?.user?.nickname}
            </Typography>
          </Flexbox>
          <Typography variant="s1" color={text[mode].text1}>
            {dayjs(data?.createdAt).fromNow()}
          </Typography>
          <Flexbox alignment="center" customStyle={{ marginLeft: 10 }}>
            <Icon width={16} height={16} name="ViewOutlined" color={text[mode].text1} />
            <Typography variant="s2" color={text[mode].text1} customStyle={{ marginLeft: 2 }}>
              {data?.viewCount?.toLocaleString()}
            </Typography>
          </Flexbox>
        </Info>
      )}
    </Box>
  );
}

export default NoticeInfo;
