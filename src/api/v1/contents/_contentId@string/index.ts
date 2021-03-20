import { Content } from "~/domain/entities/Content";

export type Methods = {
  get: {
    resBody: Content;
  };
  put: {
    reqBody: Content;
    resBody: Content;
  };
};
