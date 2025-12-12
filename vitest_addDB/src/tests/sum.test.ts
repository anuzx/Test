import { describe, it, expect, vi } from "vitest";
import request from "supertest";
import { app } from "../index";

//we need to mock out the database request

//this way of mocking will become complex we will have more and more tables with different operations
/*
vi.mock("../db", () => {
  return {
    Prisma: {
      request: {
        create: vi.fn(),
        //now anywhere in index.ts Prisma.request.create called it will be replaced by a mock fn
      },
    },
  };
});
*/

//so we should do deep mocking
vi.mock("../db")

describe("Test the sum fxn", () => {
  it("should return 3 when 1+2", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });
    expect(res.body.answer).toBe(3);
    expect(res.statusCode).toBe(200);
  });
  it("should fail when numbers are large", async () => {
    const res = await request(app).post("/sum").send({
      a: 9999999,
      b: 9999999,
    });
    expect(res.body.message).toBe("we dont allow large values ");
    expect(res.statusCode).toBe(422);
  });
});
