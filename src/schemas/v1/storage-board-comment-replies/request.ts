export interface PostStorageBoardCommentReplyData {
  nickname?: string | null;
  password?: string | null;
  content: string | null;
}

export interface DeleteStorageBoardCommentReplyData {
  storageId: number;
  id: number;
  commentId: number;
  replyId: number;
  password: string;
}
