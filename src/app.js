import express from "express";
import indexRoute from "./routes/index.routes";
import { create } from "express-handlebars";
import path from "path";
import morgan from 'morgan';
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", ".hbs");

const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
});
app.engine(".hbs", exphbs.engine);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(indexRoute);

export default app;
