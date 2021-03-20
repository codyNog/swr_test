import { User } from "~/domain/entities/User";
import { httpClient } from "~/libs/httpClient";

const fetchUser = (id: string) => httpClient.v1.users._userId(id).$get();

const fetchUsers = () => httpClient.v1.users.$get();

const updateUser = (user: User) =>
  httpClient.v1.users._userId(user.id).$put({ body: user });

export interface UserUseCase {
  fetchUser: (id: string) => Promise<User>;
  fetchUsers: () => Promise<User[]>;
  updateUser: (user: User) => Promise<User>;
}

export const userImpl: UserUseCase = {
  fetchUser,
  fetchUsers,
  updateUser
};
