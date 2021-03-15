import useSWR from "swr";
import { httpClient } from "~/libs/httpClient";

export const useUser = () => {
  const { data: user } = useSWR("getUsers", httpClient.v1.users.$get);

  return { user };
};
