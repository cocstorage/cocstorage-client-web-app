import { FetchNoticesParams } from '@schemas//v1/notices/request';

const notices = {
  all: (params: FetchNoticesParams) => ['notices', params]
};

const queryKey = {
  notices
};

export default queryKey;
