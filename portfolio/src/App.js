import React from 'react';
import './App.css';
import Home from './Components/Home/home';
import Header from './Components/Header/header'



class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}



export default App;
