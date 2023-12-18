import { Flexbox } from '@cocstorage/ui';

import StorageBoardCard from '@components/molecules/StorageBoardCard';

import useStorageBoards from '../../_hooks/useStorageBoards';

function StorageBoardsList() {
  const { data, isPending } = useStorageBoards();

  return (
    <Flexbox
      component="section"
      direction="vertical"
      gap={18}
      customStyle={{
        margin: '20px 0'
      }}
    >
      {isPending &&
        Array.from({ length: 20 })
          .map((_, index) => index)
          .map((index) => <StorageBoardCard.Skeleton key={`storage-board-skeleton-${index}`} />)}
      {!isPending &&
        data?.boards.map((storageBoard) => (
          <StorageBoardCard
            key={`storage-board-${storageBoard.id}`}
            storageBoard={storageBoard}
            inStorage
          />
        ))}
    </Flexbox>
  );
}

export default StorageBoardsList;
