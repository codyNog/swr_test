import { Content } from "~/domain/entities/Content";

export type Methods = {
  get: {
    query?: {
      limit: number;
    };

    resBody: Content[];
  };
};
