import Axios from '@libraries/axios';
import {
  DeleteNoticeCommentData,
  FetchNoticeCommentsParams,
  FetchNoticeCommentsResponse,
  PostNoticeCommentData
} from '@schemas/v1/notice-comments/request';
import { NoticeComment } from '@schemas/v1/notice-comments/response';

const BASE_PATH = '/admin/notices';

export async function fetchNoticeComments(id: number, params?: FetchNoticeCommentsParams) {
  const { data } = await Axios.get<FetchNoticeCommentsResponse>(`${BASE_PATH}/${id}/comments`, {
    params
  });

  return data;
}

export async function postNonMemberNoticeComment(id: number, data: PostNoticeCommentData) {
  const { data: response } = await Axios.post<NoticeComment, PostNoticeCommentData>(
    `${BASE_PATH}/${id}/comments/non-members`,
    data
  );

  return response;
}

export async function deleteNonMemberNoticeComment({
  id,
  commentId,
  password
}: DeleteNoticeCommentData) {
  const { data: response } = await Axios.delete<NoticeComment>(
    `${BASE_PATH}/${id}/comments/non-members/${commentId}`,
    {
      data: {
        password
      }
    }
  );

  return response;
}
