import Axios from '@libraries/axios';
import {
  DeleteStorageBoardCommentData,
  FetchStorageBoardCommentsParams,
  FetchStorageBoardCommentsResponse,
  PostStorageBoardCommentData
} from '@schemas/v1/storage-board-comments/request';
import { StorageBoardComment } from '@schemas/v1/storage-board-comments/response';

const BASE_PATH = '/storages';

export async function fetchStorageBoardComments(
  storageId: number,
  id: number | string,
  params?: FetchStorageBoardCommentsParams
) {
  const { data } = await Axios.get<FetchStorageBoardCommentsResponse>(
    `${BASE_PATH}/${storageId}/boards/${id}/comments`,
    {
      params
    }
  );

  return data;
}

export async function postNonMemberStorageBoardComment(
  storageId: number,
  id: number | string,
  data: PostStorageBoardCommentData
) {
  const { data: response } = await Axios.post<StorageBoardComment, PostStorageBoardCommentData>(
    `${BASE_PATH}/${storageId}/boards/${id}/comments/non-members`,
    data
  );

  return response;
}

export async function deleteNonMemberStorageBoardComment({
  storageId,
  id,
  commentId,
  password
}: DeleteStorageBoardCommentData) {
  const { data: response } = await Axios.delete<StorageBoardComment>(
    `${BASE_PATH}/${storageId}/boards/${id}/comments/non-members/${commentId}`,
    {
      data: {
        password
      }
    }
  );

  return response;
}
