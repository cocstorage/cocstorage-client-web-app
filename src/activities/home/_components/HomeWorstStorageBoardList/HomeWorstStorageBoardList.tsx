import { Box, Flexbox, IconButton, Tag, Typography, useTheme } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';
import { useQuery } from '@tanstack/react-query';

import { fetchWorstStorageBoards } from '@apis/v1/storage-boards';
import List from '@components/atoms/List';
import StorageBoardCard from '@components/molecules/StorageBoardCard';
import queryKey from '@constants/queryKey';

function HomeWorstStorageBoardList() {
  const {
    theme: {
      palette: {
        secondary: { red }
      }
    }
  } = useTheme();

  const { data, isPending } = useQuery({
    queryKey: queryKey.storageBoards.worst(),
    queryFn: () =>
      fetchWorstStorageBoards({
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
            startIcon={<Icon name="ThumbsDownOutlined" width={14} height={14} color={red.main} />}
            customStyle={{
              padding: '0 6px',
              height: 21,
              borderRadius: 4,
              fontSize: 12,
              backgroundColor: red.bg,
              color: red.main
            }}
          >
            워스트
          </Tag>
          <Typography variant="h4" fontWeight="bold">
            와 선 넘네
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

export default HomeWorstStorageBoardList;
