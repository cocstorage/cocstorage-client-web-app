import { FetchNoticesParams } from '@schemas//v1/notices/request';

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
  worst: () => [...storageBoards.all(), 'worst']
};

const notices = {
  all: (params: FetchNoticesParams) => ['notices', params]
};

export default {
  issueKeywords,
  storages,
  storageBoards,
  notices
};
