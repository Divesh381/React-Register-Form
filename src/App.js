import './App.css';
import React, { Component } from 'react'
import Register from "./Components/Register"
import Greet from './Components/Greet'
// import axios from "axios"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRegistered: false,
      name: null,
      email: null,
      password: null,
      showPass: false,
      // posts:null,
    }
    
  }
  RegistrationHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value
    this.setState({ name, email,password, isRegistered: true },()=>{
      // console.log(this.state)
    });
    

  };

  showPasswordHandler = () => {
    // event.preventDefault();
    this.setState({ showPass: !this.state.showPass })
    // console.log(this.state.showPass)
    
  };
  
  
  render() {
    return (
      <div>
        {this.state.isRegistered ? (
          <Greet name={this.state.name}
            email={this.state.email} />
        ) : (
          <Register submits={this.RegistrationHandler}
            showPass={this.state.showPass}
            click={this.showPasswordHandler} />
        )};


      </div>
    );
  }
}

export default App
