import { User } from '@schemas/v1/users/response';

export interface StorageBoardCommentReply {
  id: number;
  storageBoardCommentId: number;
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
}
