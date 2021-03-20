import { Content } from "~/domain/entities/Content";
import { Message } from "~/domain/entities/Message";
import { User } from "~/domain/entities/User";

const user1: User = {
  id: "foo",
  name: "bar"
};

const user2: User = {
  id: "hoge",
  name: "fuga"
};

const users: User[] = [user1, user2];

const user = {
  user1,
  user2,
  users
};

const content1: Content = {
  id: "dawdwadwa",
  body: "レイバン特価2999円",
  status: {
    reposts: 2999,
    likes: 2999
  }
};

const content2: Content = {
  id: "vgvnbvczdss",
  body: "たんたんたぬき",
  status: {
    reposts: 10,
    likes: 1
  }
};

const contents = [content1, content2];

const content = {
  content1,
  content2,
  contents
};

const message1: Message = {
  id: "2yhafiuafhaK02",
  from: "foo",
  to: "bar",
  body: "aaaaa"
};

const message2: Message = {
  id: "2yhafiudahdwag7tdawafhaK02",
  from: "foo",
  to: "bar",
  body: "aaaaa"
};

const messages: Message[] = [message1, message2];

const message = {
  message1,
  message2,
  messages
};

export const mockData = {
  user,
  content,
  message
};
