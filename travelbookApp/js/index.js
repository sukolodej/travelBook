import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyApp extends React.Component {
    constructor(props) {
      super(props)
    }
    
    render() {
      let slides = [
      <img src="../images/main_page/sarka.jpg" alt="1" />,
      <img src="../images/main_page/sarka.jpg" alt="2" />,
      <img src="../images/main_page/sarka.jpg" alt="3" />, 
      <img src="../images/main_page/sarka.jpg" alt="4" />,
      <img src="../images/main_page/sarka.jpg" alt="5" />];

      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"></h1>
          </header>
          
          This is our carousal Component: 
          <br/>
          <br/>
          <br/>
          <Carousal.Carousel slides={slides}/>
  {/* Carousal.Carousal because of unpkg in developement use npm import and use only {Carousal}*/}
        </div>
      );
    }
  }
  
  ReactDOM.render(<MyApp />, document.querySelector("#carousel"))
  