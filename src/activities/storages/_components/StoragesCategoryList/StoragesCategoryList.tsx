import { MouseEvent } from 'react';

import { Skeleton, Tag } from '@cocstorage/ui';
import { useQuery } from '@tanstack/react-query';

import { fetchStorageCategories } from '@apis/v1/storage-categories';
import queryKey from '@constants/queryKey';

import { StyledStoragesCategoryList } from './StoragesCategoryList.styles';
import useCategoryStore from '../../_stores/category';

function StoragesCategoryList() {
  const { selectedCategoryId, setSelectedCategoryId } = useCategoryStore();

  const { data, isPending } = useQuery({
    queryKey: queryKey.storageCategories.all,
    queryFn: () => fetchStorageCategories()
  });

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const newSelectedCategoryId = Number(event.currentTarget.dataset?.selectedCategoryId);

    if (selectedCategoryId === newSelectedCategoryId) {
      setSelectedCategoryId(0);
    } else {
      setSelectedCategoryId(newSelectedCategoryId);
    }
  };

  return (
    <StyledStoragesCategoryList>
      {isPending &&
        Array.from({ length: 10 })
          .map((_, index) => index)
          .map((index) => (
            <Skeleton
              key={`category-skeleton-${index}`}
              width={55}
              height={32}
              round={8}
              disableAspectRatio
            />
          ))}
      {!isPending &&
        data?.categories.map(({ id, name }) => (
          <Tag
            key={`category-${id}`}
            variant={id === selectedCategoryId ? 'accent' : 'text'}
            data-selected-category-id={id}
            onClick={handleClick}
          >
            {name}
          </Tag>
        ))}
    </StyledStoragesCategoryList>
  );
}

export default StoragesCategoryList;
