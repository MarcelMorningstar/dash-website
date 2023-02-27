import React from 'react';
import Navbar from './components/Navbar';
import RideRequest from './components/RideRequest';
import "./Styles/main.css";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <RideRequest />
    </React.Fragment>
  );
}

export default App;
