import express from "express";

//we need to export it so that we can import it into our test file

//when we have tests in express application app.listen is kept inside another file "bin.ts" , this is beacuse if app.listen will be in this folder then the  server will start to run 2 times once here and one due to test file
//therefore now we will not do node dist/index.js we have to do node dist/bin.js
export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (a > 1000000 || b > 1000000) {
    return res.status(422).json({
      message: "we dont allow large values ",
    });
  }
  const result = a + b;

  res.json({ answer: result });
});
