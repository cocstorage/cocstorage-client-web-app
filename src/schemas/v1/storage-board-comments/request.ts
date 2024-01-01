import { Pagination } from '@schemas/v1/common';
import { StorageBoardComment } from '@schemas/v1/storage-board-comments/response';
import { FetchStorageBoardParams } from '@schemas/v1/storage-boards/request';

export interface FetchStorageBoardCommentsParams extends FetchStorageBoardParams {
  page?: number;
  per?: number;
  orderBy?: string;
}

export interface FetchStorageBoardCommentsResponse {
  comments: StorageBoardComment[];
  pagination: Pagination;
}

export interface PostStorageBoardCommentData {
  nickname?: string | null;
  password?: string | null;
  content: string | null;
}

export interface DeleteStorageBoardCommentData {
  storageId: number;
  id: number;
  commentId: number;
  password: string;
}
