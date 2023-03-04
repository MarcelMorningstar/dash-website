import React from 'react';
import Navbar from './components/Navbar';
import "./Styles/main.css";
import Footer from './components/Footer';

function App() {
  return (
    <><div>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className = "page-container">
        <div className = "content-wrap">
        </div>
      </div>
    </div>
    <Footer /></>
  );
}

export default App;
