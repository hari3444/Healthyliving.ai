import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/daily-routine">Daily Routine</Link>
          <Link to="/vegan">Vegan</Link>
          <Link to="/vegetarian">Vegetarian</Link>
          <Link to="/non-vegetarian">Non-Vegetarian</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/daily-routine" element={<DailyRoutine />} />
          <Route path="/vegan" element={<Vegan />} />
          <Route path="/vegetarian" element={<Vegetarian />} />
          <Route path="/non-vegetarian" element={<NonVegetarian />} />
        </Routes>
      </div>
    </Router>
  );
};

const Welcome = () => {
  return (
    <h1 className="welcome">Welcome to Healthyliving.ai!</h1>
  );
};

const DailyRoutine = () => {
  return (
    <div>
      <h1>Daily Routine</h1>
      <p>This is the daily routine page.</p>
    </div>
  );
};

const Vegan = () => {
  return (
    <div>
      <h1>Vegan</h1>
      <p>This is the vegan page.</p>
    </div>
  );
};

const Vegetarian = () => {
  return (
    <div>
      <h1>Vegetarian</h1>
      <p>This is the vegetarian page.</p>
    </div>
  );
};

const NonVegetarian = () => {
  return (
    <div>
      <h1>Non-Vegetarian</h1>
      <p>This is the non-vegetarian page.</p>
    </div>
  );
};

export default App;
