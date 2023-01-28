exports.getLogin = (req, res, next) => {
  //const isLoggedIn = req.get("Cookie").split(";")[1].trim().split("=")[1] === 'true';
  console.log(req.session.isLoggedIn)
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5bab316ce0a7c75f783cb8a8')
  .then(user => {
    req.session.isLoggedIn = true
    req.session.user = User
    req.session.save((err)=>{
      console.log(err)
      res.redirect("/");
    })
  })
  .catch(err => console.log(err))
};

exports.getLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err)
    res.redirect('/')
  })
  }