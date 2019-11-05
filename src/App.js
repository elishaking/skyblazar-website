import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Landing from './components/routes/Landing';

function App() {
  return (
    <Router>
      <Route path="/" component={Landing} exact />
    </Router>
  );
}

export default App;
