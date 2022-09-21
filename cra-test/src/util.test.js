import { addNumber } from "./util";

it("add two numbers", () => {
  const result = addNumber(1, 2);
  expect(result).tobe(2);
});
