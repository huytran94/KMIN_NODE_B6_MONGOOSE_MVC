import express from "express";
import { engine } from "express-handlebars";
import { pathResolve } from "./pathHandler.js";
import connectToDatabase from "./configDb.js";
import routes from "./routes/index.js";
// set constatnt data
const port = 3000;

// call express
const app = express();

// set template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", pathResolve("views"));

// set static files
app.use(express.static(pathResolve("public")));

// test mongo db
await connectToDatabase();

// call routes
routes(app);
// set port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
