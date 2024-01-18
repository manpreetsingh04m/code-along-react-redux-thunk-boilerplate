import React from "react";
import User from "./component/User";
import './App.css'

export default class App extends React.Component{

  render(){
    return (
      <div className="list">
        <User/>
      </div>
    )
  }
  
}