import { Content } from "~/domain/entities/Content";
import { httpClient } from "~/libs/httpClient";

const fetchContents = () => httpClient.v1.contents.$get();

const fetchContent = (id: string) =>
  httpClient.v1.contents._contentId(id).$get();

const updateContent = (content: Content) =>
  httpClient.v1.contents._contentId(content.id).$put({ body: content });

export interface ContentUseCase {
  fetchContents: () => Promise<Content[]>;
  fetchContent: (id: string) => Promise<Content>;
  updateContent: (content: Content) => Promise<Content>;
}

export const contentImpl: ContentUseCase = {
  fetchContents,
  fetchContent,
  updateContent
};
