import { useCallback } from "react";
import useSWR from "swr";
import { backend } from "~/domain/backend";
import { Content } from "~/domain/entities/Content";
import { Message } from "~/domain/entities/Message";
import { User } from "~/domain/entities/User";

export const useGlobal = () => {
  const { data: users, mutate: mutateUsers } = useSWR<User[]>(
    "users",
    backend().user.fetchUsers
  );
  const { data: messages } = useSWR<Message[]>(
    users ? "messages" : null,
    backend().message.fetchMessages
  );
  const { data: contents } = useSWR<Content[]>(
    users ? "contents" : null,
    backend().content.fetchContents
  );
  const { data: content, mutate: mutateContent } = useSWR<Content>(
    "content",
    backend().content.fetchContent
  );

  const currentUser = (id: string) => users.find((elem) => elem.id === id);

  const updateUser = useCallback(async (user: User) => {
    const newUser = await backend().user.updateUser(user);
    const index = users.findIndex((elem) => elem.id === newUser.id);
    const nextState = [...users];
    nextState.splice(index, 1, newUser);
    await mutateUsers(nextState, false);
  }, []);

  const updateContent = useCallback(async (content: Content) => {
    await mutateContent(backend().content.updateContent(content), false);
  }, []);

  return {
    users,
    messages,
    contents,
    content,
    currentUser,
    updateUser,
    updateContent
  };
};
