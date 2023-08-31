import { storage } from "../lib/storage";
import { saveUsername, getUsername } from "../user";
jest.mock("../lib/storage");
const mockedStorage = storage as jest.Mocked<typeof storage>;

test("first example", () => {
  const myMock = jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce("hello world")
    .mockReturnValueOnce(5);

  const result1 = myMock();
  const result2 = myMock();
  const result3 = myMock();

  expect(myMock).toHaveBeenCalled();
  expect(myMock).toHaveBeenCalledTimes(3);

  expect(result1).toBe(true);
  expect(result2).toBe("hello world");
  expect(result3).toBe(5);
});
test("second example", () => {
  const username = "john doe";
  saveUsername(username);
  expect(mockedStorage.save).toHaveBeenCalledTimes(1);
  expect(mockedStorage.save).toHaveBeenCalledWith({
    key: "username",
    value: username,
  });
});

test("third example", () => {
  const username = "John Doe";
  mockedStorage.get.mockReturnValueOnce(username);
  const result = getUsername();
  expect(result).toBeUndefined();
  saveUsername(username);
  expect(mockedStorage.save).toHaveBeenCalledTimes(1);
  expect(mockedStorage.save).toHaveBeenCalledWith({
    key: "username",
    value: username,
  });
});
