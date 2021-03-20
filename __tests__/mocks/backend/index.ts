import { Backend } from "~/domain/backend";
import { ContentUseCase } from "~/domain/impl/Content";
import { MessageUseCase } from "~/domain/impl/Message";
import { UserUseCase } from "~/domain/impl/User";
import { mockData } from "__tests__/mocks/data";

const user: UserUseCase = {
  fetchUser: async () => mockData.user.user1,
  fetchUsers: async () => mockData.user.users,
  updateUser: async (user) => user
};

const content: ContentUseCase = {
  fetchContents: async () => mockData.content.contents,
  fetchContent: async (_id) => mockData.content.content1,
  updateContent: async (content) => content
};

const message: MessageUseCase = {
  fetchMessages: async () => mockData.message.messages
};

export const mockBackend: Backend = {
  user,
  content,
  message
};
