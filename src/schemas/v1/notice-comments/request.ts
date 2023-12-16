import { Pagination } from '@schemas/v1/common';
import { NoticeComment } from '@schemas/v1/notice-comments/response';

export interface FetchNoticeCommentsParams {
  page?: number;
  per?: number;
  orderBy?: string;
}

export interface FetchNoticeCommentsResponse {
  comments: NoticeComment[];
  pagination: Pagination;
}

export interface PostNoticeCommentData {
  nickname?: string | null;
  password?: string | null;
  content: string | null;
}

export interface DeleteNoticeCommentData {
  id: number;
  commentId: number;
  password: string;
}
