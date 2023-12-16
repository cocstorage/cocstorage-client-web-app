import { Pagination } from '@schemas/v1/common';
import { Notice } from '@schemas/v1/notices/response';

export interface FetchNoticesResponse {
  notices: Notice[];
  pagination: Pagination;
}

export interface FetchNoticesParams {
  page?: number;
  per?: number;
  orderBy?: string;
}
