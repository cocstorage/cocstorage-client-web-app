import { FetchNoticesParams } from '@schemas//v1/notices/request';
import {
  FetchStorageBoardParams,
  FetchStorageBoardsParams
} from '@schemas/v1/storage-boards/request';
import { Id } from '@typings/common';

const issueKeywords = {
  all: ['issue-keywords'],
  rank: () => [...issueKeywords.all, 'rank']
};

const storages = {
  all: ['storages'],
  storage: (path: Id) => [...storages.all, path]
};

const storageCategories = {
  all: ['storage-categories']
};

const storageBoards = {
  all: ({ path = 'all', ...params }: FetchStorageBoardsParams) => [
    ...storages.all,
    path,
    'boards',
    params
  ],
  popular: () => [...storageBoards.all({}), 'popular'],
  worst: () => [...storageBoards.all({}), 'worst'],
  latest: () => [...storageBoards.all({}), 'latest'],
  storageBoard: ({ path, id }: FetchStorageBoardParams) => [...storageBoards.all({ path }), id]
};

const notices = {
  all: (params: FetchNoticesParams) => ['notices', params],
  notice: (id: Id) => [...notices.all({}), id]
};

export default {
  issueKeywords,
  storages,
  storageCategories,
  storageBoards,
  notices
};
