import { Pagination } from '@schemas/v1/common';
import { Storage } from '@schemas/v1/storages/response';

export interface FetchStoragesResponse {
  storages: Storage[];
  pagination: Pagination;
}
