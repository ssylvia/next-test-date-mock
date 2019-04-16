import { getCurrentTime } from "./index";

describe("utils", () => {
  test("getCurrentTime", () => {
    jest.spyOn(Date, "now").mockImplementation(() => 0);
    expect(getCurrentTime()).toBe(0);
  });
});
