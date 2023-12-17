import Axios from '@libraries/axios';
import { FetchNoticesParams, FetchNoticesResponse } from '@schemas/v1/notices/request';
import { Notice } from '@schemas/v1/notices/response';
import { Id } from '@typings/common';

const BASE_PATH = '/notices';

export async function fetchNotices(params?: FetchNoticesParams) {
  const { data } = await Axios.get<FetchNoticesResponse>(BASE_PATH, {
    params
  });

  return data;
}

export async function fetchNotice(id: Id) {
  const { data } = await Axios.get<Notice>(`/admin/${BASE_PATH}/${id}`);

  return data;
}

export async function putNoticeViewCount(id: Id) {
  const { data } = await Axios.put<Notice, unknown>(`/admin/${BASE_PATH}/${id}/view-count`);

  return data;
}
