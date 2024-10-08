class AuthController {
  signup(req, res, next) {
    //render sign up page
    res.render("signup");
  }
}

export default new AuthController();
