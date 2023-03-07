import React from 'react';
import Navbar from './components/Navbar.js';
import Layout from './components/Layout.js';
import RideRequest from './components/RideRequest.js';
import "./Styles/main.css";

function App() {
  return (
    <Layout>
      <RideRequest />
    </Layout>
  );
}

export default App;
