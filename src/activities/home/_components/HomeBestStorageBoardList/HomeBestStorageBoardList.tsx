import { Box, Flexbox, IconButton, Tag, Typography } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';
import { useQuery } from '@tanstack/react-query';

import { fetchPopularStorageBoards } from '@apis/v1/storage-boards';
import List from '@components/atoms/List';
import StorageBoardCard from '@components/molecules/StorageBoardCard';
import queryKey from '@constants/queryKey';

function HomeBestStorageBoardList() {
  const { data, isPending } = useQuery({
    queryKey: queryKey.storageBoards.popular(),
    queryFn: () =>
      fetchPopularStorageBoards({
        per: 5
      })
  });

  return (
    <Box component="section" customStyle={{ margin: '30px -20px 0' }}>
      <Flexbox
        alignment="center"
        justifyContent="space-between"
        gap={4}
        customStyle={{ margin: '0 20px' }}
      >
        <Flexbox alignment="center" justifyContent="space-between" gap={8}>
          <Tag
            variant="semiAccent"
            startIcon={<Icon name="ThumbsUpOutlined" width={14} height={14} />}
            customStyle={{
              padding: '0 6px',
              height: 21,
              borderRadius: 4,
              fontSize: 12
            }}
          >
            베스트
          </Tag>
          <Typography variant="h4" fontWeight="bold">
            ㅇㄱㄹㅇ
          </Typography>
        </Flexbox>
        <IconButton>
          <Icon name="CaretSemiRightOutlined" />
        </IconButton>
      </Flexbox>
      <List
        customStyle={{
          marginTop: 16
        }}
      >
        {isPending &&
          Array.from({ length: 5 })
            .map((_, index) => index)
            .map((index) => (
              <StorageBoardCard.Skeleton key={`best-storage-board-${index}`} variant="normal" />
            ))}
        {!isPending &&
          data?.boards?.map((storageBoard) => (
            <StorageBoardCard
              key={`best-storage-board-${storageBoard.id}`}
              variant="normal"
              storageBoard={storageBoard}
              hideSymbolismBadge
              customStyle={{ maxWidth: 330 }}
            />
          ))}
      </List>
    </Box>
  );
}

export default HomeBestStorageBoardList;
