import { describe, expect, test } from "@jest/globals";
import { sum } from "../index.js";
//we can add bunch of test cases here
describe("sum module", () => {
    test("adds 1 + 2 to equal 3", () => {
        const ans = sum(1, 2);
        expect(ans).toBe(3);
    });
    test("adds negative numbers", () => {
        const ans = sum(-1, -2);
        expect(ans).toBe(-3);
    });
    test("adds zeroes", () => {
        const ans = sum(0, 0);
        expect(ans).toBe(0);
    });
});
//# sourceMappingURL=index.test.js.map