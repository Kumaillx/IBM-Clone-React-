import React from 'react';
import Navbar from './components/Navbar';
import Footbar from './components/Footbar';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <div className="main-content">
          <h1>Put AI to work today</h1>
          <p>
            Automate real workflows with prebuilt agents for sales and procurement or build your own with our new no-code tools and capabilities
          </p>
          <div className="buttons">
            <button>Explore what's new →</button>
            <button>Learn about AI agents →</button>
          </div>
          <div className="image-placeholder"></div>
        </div>
        <div className="sidebar">
          <h3>Latest news</h3>
          <p>
            <a href="#">Deutsche Telekom Selects IBM Concert to Accelerate IT...</a> →
          </p>
          <p>
            <a href="#">Parsons Corporation is Ready Now to Build America's...</a> →
          </p>
        </div>
      </div>
      <div className="content-spacer"></div> {/* Spacer to push footer to bottom */}
      <Footbar />
    </div>
  );
}

export default App;