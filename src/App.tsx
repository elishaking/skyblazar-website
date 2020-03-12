import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/Landing";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Route path="/" component={Landing} exact />
      <Route path="/articles" component={Articles} exact />
      <Route path="/articles/:name" component={Article} exact />
      <Footer />
    </Router>
  );
}

export default App;
