const express = require("express");
const app = express();

const courses = [
  { result: { no: "111111", skelp: "3" } },
  { result: { no: "222222", skelp: "4" } },
  { result: { no: "333333", skelp: "5" } }
];
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  const course = {
    no: courses.length + 1,
    skelp: "666666"
  };
  courses.push(course);
  res.send(course);
});

// 해당하는 ID를 찾아서 Respon
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send(`ID was not found`);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send(`ID was not found`);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
