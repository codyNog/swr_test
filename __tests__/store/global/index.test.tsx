import { act, renderHook } from "@testing-library/react-hooks";
import { mockData } from "__tests__/mocks/data";
import { useGlobal } from "~/store/global";
import * as backendModule from "~/domain/backend";
import { mockBackend } from "__tests__/mocks/backend";
import { User } from "~/domain/entities/User";

describe("useUser", () => {
  beforeAll(() => {
    jest.spyOn(backendModule, "backend").mockReturnValue(mockBackend);
  });

  test("初期状態", async () => {
    const { result, waitForNextUpdate } = renderHook(useGlobal);

    await waitForNextUpdate();

    expect(result.current.users).toStrictEqual(mockData.user.users);
    expect(result.current.contents).toStrictEqual(mockData.content.contents);
    expect(result.current.messages).toStrictEqual(mockData.message.messages);
    expect(result.current.content).toStrictEqual(mockData.content.content1);
    expect(result.current.currentUser(mockData.user.user1.id)).toStrictEqual(
      mockData.user.user1
    );
  });

  test("user更新", async () => {
    const { result } = renderHook(useGlobal);
    const updateUser: User = { ...mockData.user.user2, name: "ユーザー2" };

    await act(async () => result.current.updateUser(updateUser));

    expect(result.current.users).toStrictEqual([
      mockData.user.user1,
      updateUser
    ]);
  });

  test("content更新", async () => {
    const { result } = renderHook(useGlobal);

    await act(async () =>
      result.current.updateContent(mockData.content.content2)
    );

    expect(result.current.content).toStrictEqual(mockData.content.content2);
  });
});
