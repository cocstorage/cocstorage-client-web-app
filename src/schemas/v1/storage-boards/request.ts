import { Pagination } from '@schemas/v1/common';
import { StorageBoard } from '@schemas/v1/storage-boards/response';

export interface FetchStorageBoardsParams {
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

export interface PutStorageBoardData {
  nickname?: string;
  password?: string | number;
  subject: string;
  content_json: string;
  description?: string;
}
