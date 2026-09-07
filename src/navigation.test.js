import { getPath, withBase } from "./navigation";

test("withBase prefixes the Vite base path", () => {
  expect(withBase("/")).toBe("/");
  expect(withBase("/animation")).toBe("/animation");
  expect(withBase("/#aprender")).toBe("/#aprender");
});

test("getPath treats the current pathname as the app route", () => {
  window.history.replaceState({}, "", "/animation");
  expect(getPath()).toBe("/animation");
});
