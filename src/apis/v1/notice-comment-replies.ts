import Axios from '@libraries/axios';
import {
  DeleteNoticeCommentReplyData,
  PostNoticeCommentReplyData
} from '@schemas/v1/notice-comment-replies/request';
import { NoticeCommentReply } from '@schemas/v1/notice-comment-replies/response';

const BASE_PATH = '/admin/notices';

export async function postNonMemberNoticeCommentReply(
  id: number,
  commentId: number,
  data: PostNoticeCommentReplyData
) {
  const { data: response } = await Axios.post<NoticeCommentReply, PostNoticeCommentReplyData>(
    `${BASE_PATH}/${id}/comments/${commentId}/replies/non-members`,
    data
  );

  return response;
}

export async function deleteNonMemberNoticeCommentReply({
  id,
  commentId,
  replyId,
  password
}: DeleteNoticeCommentReplyData) {
  const { data: response } = await Axios.delete<NoticeCommentReply>(
    `${BASE_PATH}/${id}/comments/${commentId}/replies/non-members/${replyId}`,
    {
      data: {
        password
      }
    }
  );

  return response;
}
