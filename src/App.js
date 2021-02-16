import React from 'react';
import './App.css';
import Feed from './Layout/Feed/Feed';
import Header from './Layout/Header/Header';
import Sidebar from './Layout/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Feed />
      {/* App Body */}
     
      {/* Widgets */}
    </div>
  );
}

export default App;
