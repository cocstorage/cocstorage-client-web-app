import { Box, Grid, Skeleton, Typography } from '@cocstorage/ui';
import { useQuery } from '@tanstack/react-query';

import { fetchStorages } from '@apis/v1/storages';
import StorageCard from '@components/molecules/StorageCard';
import queryKey from '@constants/queryKey';

import useStorageCategories from '../../_hooks/useStorageCategories';
import useCategoryStore from '../../_stores/category';

function StoragesGrid() {
  const selectedCategoryId = useCategoryStore((state) => state.selectedCategoryId);

  const { data, isPending } = useStorageCategories();

  const { data: storages, isPending: isPendingStorages } = useQuery({
    queryKey: queryKey.storages.all,
    queryFn: () => fetchStorages(),
    select: (selectData) => {
      if (selectedCategoryId) {
        return selectData.storages.filter(
          (storage) => storage.storageCategoryId === selectedCategoryId
        );
      }

      return selectData?.storages;
    }
  });

  if (isPending || isPendingStorages) {
    return Array.from({ length: 5 })
      .map((_, index) => index)
      .map((index) => (
        <Box
          key={`storage-category-skeleton-${index}`}
          component="section"
          customStyle={{ margin: '30px 0 20px' }}
        >
          <Skeleton width={70} height={20} round={6} disableAspectRatio />
          <Grid container columnGap={16} rowGap={20} customStyle={{ marginTop: 10 }}>
            {Array.from({ length: 9 })
              .map((_, gridIndex) => gridIndex)
              .map((gridIndex) => (
                <Grid
                  key={`storage-category-skeleton-${index}-storage-skeleton-${gridIndex}`}
                  item
                  xs={3}
                >
                  <StorageCard.Skeleton />
                </Grid>
              ))}
          </Grid>
        </Box>
      ));
  }

  return data?.categories?.map(({ id, name }) => {
    const categoryStorages = storages?.filter(({ storageCategoryId }) => storageCategoryId === id);

    if (!categoryStorages?.length) return null;

    return (
      <Box
        key={`storage-category-${id}`}
        component="section"
        customStyle={{ margin: '30px 0 20px' }}
      >
        <Typography variant="h4" fontWeight="bold">
          {name}
        </Typography>
        <Grid container columnGap={16} rowGap={20} customStyle={{ marginTop: 10 }}>
          {categoryStorages.map(({ id: storageId, name: storageName, avatarUrl }) => (
            <Grid key={`storage-category-${id}-storage-${storageId}`} item xs={3}>
              <StorageCard src={avatarUrl || ''} path={storageId} name={storageName} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  });
}

export default StoragesGrid;
