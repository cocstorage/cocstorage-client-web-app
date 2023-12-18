import { Button, Flexbox, Skeleton, useTheme } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';

import useStorageBoard from '../../_hooks/useStorageBoard';

function StorageBoardRecommend() {
  const {
    theme: {
      mode,
      palette: { primary, text }
    }
  } = useTheme();

  const { data, isPending } = useStorageBoard();

  return (
    <Flexbox component="section" justifyContent="center" customStyle={{ marginTop: 40 }}>
      {isPending && <Skeleton width={100} height={38} round={8} disableAspectRatio />}
      {!isPending && (
        <Flexbox>
          <Button
            startIcon={<Icon name="ThumbsUpFilled" width={15} height={15} color="primary" />}
            data-type={0}
            customStyle={{
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              fontWeight: 700,
              color: primary.main
            }}
          >
            {data?.thumbUp?.toLocaleString()}
          </Button>
          <Button
            startIcon={<Icon name="ThumbsDownOutlined" width={15} height={15} />}
            data-type={1}
            customStyle={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              color: text[mode].text1
            }}
          >
            {data?.thumbDown?.toLocaleString()}
          </Button>
        </Flexbox>
      )}
    </Flexbox>
  );
}

export default StorageBoardRecommend;
