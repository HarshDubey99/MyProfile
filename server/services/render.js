
// index
exports.homeRoute = (req, res) => {
  res.render("index");
};
// about
exports.aboutRoute = (req, res) => {
  res.render("about");
};

// services
exports.servicesRoute = (req, res) => {
  res.render("services");
};

// portfolio
exports.portfolioRoute = (req, res) => {
  res.render("portfolio");
};

// contact
exports.contactRoute = (req, res) => {
  res.render("contact");
};
