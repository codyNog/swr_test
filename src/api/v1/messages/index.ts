import { Message } from "~/domain/entities/Message";

export type Methods = {
  get: {
    query?: {
      limit: number;
    };

    resBody: Message[];
  };
};
