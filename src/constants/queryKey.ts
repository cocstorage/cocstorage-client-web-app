import { FetchNoticesParams } from '@schemas//v1/notices/request';
import { Id } from '@typings/common';

const issueKeywords = {
  all: ['issue-keywords'],
  rank: () => [...issueKeywords.all, 'rank']
};

const storages = {
  all: ['storages']
};

const storageBoards = {
  all: () => [...storages.all, 'boards'],
  popular: () => [...storageBoards.all(), 'popular'],
  worst: () => [...storageBoards.all(), 'worst'],
  latest: () => [...storageBoards.all(), 'latest']
};

const notices = {
  all: (params: FetchNoticesParams) => ['notices', params],
  notice: (id: Id) => [...notices.all({}), id]
};

export default {
  issueKeywords,
  storages,
  storageBoards,
  notices
};
