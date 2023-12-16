import { NoticeCommentReply } from '@schemas/v1/notice-comment-replies/response';
import { User } from '@schemas/v1/users/response';

export interface NoticeComment {
  id: number;
  noticeId: number;
  user: User | null;
  nickname: string;
  content: string;
  thumbUp: number;
  thumbDown: number;
  isActive: boolean;
  isMember: boolean;
  createdIp: string;
  createdAt: string;
  updatedAt: string;
  replies: NoticeCommentReply[];
}
