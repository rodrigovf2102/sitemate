import app, { start } from "./app";

const port = 5000;

start().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
});
