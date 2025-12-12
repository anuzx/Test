import { describe, it , expect } from "@jest/globals";
import request from "supertest";
import { app } from "../index"

describe("Test the sun fxn", () => {
    it("should return 3 when 1+2" ,async()=> {
        //here we can do via axios but we will use a library called superTest
        /*const res = await axois.post("http://localhost:3000/sum") */
       const res = await request(app).post("/sum").send({
            a: 1,
            b:2
       })
        expect(res.body.answer).toBe(3)
        expect(res.statusCode).toBe(200)
    })
    it("should fail when numbers are large", async () => {
      
      const res = await request(app).post("/sum").send({
        a: 9999999,
        b: 9999999,
      });
      expect(res.body.message).toBe("we dont allow large values ");
      expect(res.statusCode).toBe(422);
    });
})