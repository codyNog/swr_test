import { userImpl, UserUseCase } from "~/domain/impl/User";
import { contentImpl, ContentUseCase } from "~/domain/impl/Content";
import { messageImpl, MessageUseCase } from "~/domain/impl/Message";

export interface Backend {
  user: UserUseCase;
  content: ContentUseCase;
  message: MessageUseCase;
}

export const backend = (): Backend => {
  return {
    user: userImpl,
    content: contentImpl,
    message: messageImpl
  };
};
