import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.set({
    'Content-Type': 'text/plain',
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
