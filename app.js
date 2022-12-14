const express = require('express');
const app = express();
const port = 5000;
const connect = require("./schemas")
const goodsRouter = require("./routes/goods")

connect();
app.use(express.json());
app.use("/api", [goodsRouter]);

app.post("/", (req, res) => {
  console.log(req.body);

  res.send("정상적으로 반환되었습니다.");
})

app.get("/", (req, res) => {
  console.log(req.query);

  const obj = {
    "key": "value",
    "안녕": "반갑습니다."
  }
  res.status(400).json(obj);
})

app.get("/:id", (req, res) => {
  console.log(req.params);

  res.send(":id URI는 정상적으로 반환되었습니다.");
})

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });



app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});