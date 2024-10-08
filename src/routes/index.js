import authRoute from "./authRoute.js";

function routes(app) {
//   const calculatePageUrl = (...pageItems) => pageItems.join(",");

//   const pagesObject = {
//     [calculatePageUrl("home", "")]: "home",
//     signup: "signup",
//   };

//   // set render pages
//   Object.entries(pagesObject).forEach(([key, value]) => {
//     // check if page exists
//     if (!value) {
//       console.log(`Page ${key} not found`);
//       return;
//     }
//     // check if url is multiple
//     if (key.includes(",")) {
//       let urlSplit = key.split(",");
//       urlSplit.forEach((page) => {
//         app.get(`/${page.trim()}`, (req, res) => {
//           res.render(value);
//         });
//       });
//     }

//     app.get(`/${key}`, (req, res) => {
//       res.render(value);
//     });
//   });

  app.use("/auth", authRoute);

  app.use("/", (req, res) => {
    res.render("home")
  })
}

export default routes;
