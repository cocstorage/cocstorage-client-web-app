import Axios from '@libraries/axios';
import {
  DeleteStorageBoardCommentReplyData,
  PostStorageBoardCommentReplyData
} from '@schemas/v1/storage-board-comment-replies/request';
import { StorageBoardCommentReply } from '@schemas/v1/storage-board-comment-replies/response';

const BASE_PATH = '/storages';

export async function postNonMemberStorageBoardCommentReply(
  storageId: number,
  id: number,
  commentId: number,
  data: PostStorageBoardCommentReplyData
) {
  const { data: response } = await Axios.post<
    StorageBoardCommentReply,
    PostStorageBoardCommentReplyData
  >(`${BASE_PATH}/${storageId}/boards/${id}/comments/${commentId}/replies/non-members`, data);

  return response;
}

export async function deleteNonMemberStorageBoardCommentReply({
  storageId,
  id,
  commentId,
  replyId,
  password
}: DeleteStorageBoardCommentReplyData) {
  const { data: response } = await Axios.delete<StorageBoardCommentReply>(
    `${BASE_PATH}/${storageId}/boards/${id}/comments/${commentId}/replies/non-members/${replyId}`,
    {
      data: {
        password
      }
    }
  );

  return response;
}
