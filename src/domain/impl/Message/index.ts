import { Message } from "~/domain/entities/Message";
import { httpClient } from "~/libs/httpClient";

const fetchMessages = () => httpClient.v1.messages.$get();

export interface MessageUseCase {
  fetchMessages: () => Promise<Message[]>;
}

export const messageImpl: MessageUseCase = {
  fetchMessages
};
