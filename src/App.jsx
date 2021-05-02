import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/pages/about/About";
import Blog from "./components/pages/blog/Blog";
import Footer from "./components/pages/footer/Footer";
import Home from "./components/pages/home/Home";
import Social from "./components/pages/social/Social";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/about" component={About} />
          <Route exact path="/social" component={Social} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
