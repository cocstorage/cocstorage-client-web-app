import { StorageBoardCommentReply } from '@schemas/v1/storage-board-comment-replies/response';
import { User } from '@schemas/v1/users/response';

export interface StorageBoardComment {
  id: number;
  storageBoardId: number;
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
  replies: StorageBoardCommentReply[];
}
