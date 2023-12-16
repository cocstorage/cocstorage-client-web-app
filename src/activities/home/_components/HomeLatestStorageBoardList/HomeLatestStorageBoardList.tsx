import { Box, Typography } from '@cocstorage/ui';
import { useQuery } from '@tanstack/react-query';

import { fetchLatestStorageBoards } from '@apis/v1/storage-boards';
import StorageBoardCard from '@components/molecules/StorageBoardCard';
import queryKey from '@constants/queryKey';

function HomeLatestStorageBoardList() {
  const { data, isPending } = useQuery({
    queryKey: queryKey.storageBoards.latest(),
    queryFn: () => fetchLatestStorageBoards()
  });

  return (
    <Box component="section" customStyle={{ margin: '32px 0 20px' }}>
      <Typography variant="h4" fontWeight="bold">
        최신 게시글
      </Typography>
      <Box customStyle={{ marginTop: 20 }}>
        {isPending &&
          Array.from({ length: 20 })
            .map((_, index) => index)
            .map((index) => (
              <StorageBoardCard.Skeleton
                key={`latest-storage-board-${index}`}
                customStyle={{ marginTop: index === 0 ? undefined : 18 }}
              />
            ))}
        {!isPending &&
          data?.boards?.map((storageBoard, index) => (
            <StorageBoardCard
              key={`latest-storage-board-${storageBoard.id}`}
              storageBoard={storageBoard}
              inStorage={false}
              customStyle={{ marginTop: index === 0 ? undefined : 18 }}
            />
          ))}
      </Box>
    </Box>
  );
}

export default HomeLatestStorageBoardList;
