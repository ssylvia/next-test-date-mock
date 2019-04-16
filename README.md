NextJS Update Breaks Date Mocks

Steps to reproduce:
1. Clone this repo (jest-typescript example: https://github.com/zeit/next.js/tree/master/examples/with-jest-typescript + 1 test with date mock)
2. `yarn install`
3. Run `yarn test --no-cache`.
4. Notice that all test pass
5. Upgrade to nextjs 8
6. Run `yarn test --no-cache`.
7. See failing tests because `Date` mock no longer works


**Test that fails**

Source method (`src/utils/index.ts`)
```ts
export const getCurrentTime = () => {
  const time = Date.now();
  return time;
};
```

Test (`src/utils/index.ts`)
```ts
test("getCurrentTime", () => {
  jest.spyOn(Date, "now").mockImplementation(() => 0);
  expect(getCurrentTime()).toBe(0);
});
```