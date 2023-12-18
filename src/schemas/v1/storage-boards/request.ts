import { Pagination } from '@schemas/v1/common';
import { StorageBoard } from '@schemas/v1/storage-boards/response';
import { Id } from '@typings/common';

export interface FetchStorageBoardsParams {
  path?: Id;
  subject?: string | null;
  content?: string | null;
  nickname?: string | null;
  page?: number;
  per?: number;
  orderBy?: string;
}

export interface FetchStorageBoardsResponse {
  boards: StorageBoard[];
  pagination: Pagination;
}

export interface FetchStorageBoardParams {
  path: Id;
  id: Id;
}

export interface PutStorageBoardData {
  nickname?: string;
  password?: string | number;
  subject: string;
  content_json: string;
  description?: string;
}
