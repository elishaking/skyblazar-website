import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Landing from './components/routes/Landing';
import Articles from './components/routes/Articles';
import Article from './components/routes/Article';

function App() {
  return (
    <Router>
      <Route path="/" component={Landing} exact />
      <Route path="/articles" component={Articles} exact />
      <Route path="/articles/:name" component={Article} exact />
    </Router>
  );
}

export default App;
