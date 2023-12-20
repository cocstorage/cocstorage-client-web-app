import { Flexbox, Pagination } from '@cocstorage/ui';

import useNotices from '../../_hooks/useNotices';

function NoticesPagination() {
  const { data } = useNotices();

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

export default NoticesPagination;
