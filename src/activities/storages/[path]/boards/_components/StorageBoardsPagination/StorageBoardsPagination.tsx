import { Flexbox, Pagination } from '@cocstorage/ui';

import useStorageBoards from '@activities/storages/[path]/boards/_hooks/useStorageBoards';

function StorageBoardsPagination() {
  const { data } = useStorageBoards();

  const totalPages = data?.pagination?.totalPages || 1;
  const perPage = data?.pagination?.perPage || 20;
  const currentPage = data?.pagination?.currentPage || 1;

  const handleChange = () => {
    //
  };

  return (
    <Flexbox component="section" justifyContent="center" customStyle={{ margin: '25px auto' }}>
      <Pagination
        count={totalPages * perPage}
        page={currentPage}
        rowPerPage={perPage}
        itemCount={5}
        onChange={handleChange}
      />
    </Flexbox>
  );
}

export default StorageBoardsPagination;
