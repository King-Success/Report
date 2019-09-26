import express from "express";
import morgan from "morgan";
import exphbs from "express-handlebars";
import favicon from "serve-favicon";
// import methodOverride from "method-override";
import path from "path";
import routes from "./src/routes";

const app = express();
const hbs = exphbs.create({
  defaultLayout: "layout",
  extname: ".hbs",
  partialsDir: "views/partials/", // same as default, I just like to be explicit
  layoutsDir: "views/layouts/", // same as default, I just like to be explicit
  helpers: {
    isEq: function(a, b, options) {
      if (a == b) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  }
});
app.engine(".hbs", hbs.engine);
app.set("view engine", "hbs");
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect app to routese
app.use(routes);

// / catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// finally, let's start our server...
const server = app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${server.address().port}`);
});

export default app;
