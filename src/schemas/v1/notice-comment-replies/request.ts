export interface PostNoticeCommentReplyData {
  nickname?: string | null;
  password?: string | null;
  content: string | null;
}

export interface DeleteNoticeCommentReplyData {
  id: number;
  commentId: number;
  replyId: number;
  password: string;
}
