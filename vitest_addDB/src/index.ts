import express from "express";
import { Prisma } from "./db.js";

export const app = express();
app.use(express.json());

app.post("/sum", async (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  if (a > 1000000 || b > 1000000) {
    return res.status(422).json({
      message: "we dont allow large values ",
    });
  }

  const result = a + b;

    //we have to mock not Prisma.request.create and not only Prisma
    //after mocking it , these line of codes will behave as if they are commented out
  await Prisma.request.create({
    data: {
      a: a,
      b: b,
      answer: result,
      type: "Sum",
    },
  });

  res.json({
    answer: result,
  });
});
