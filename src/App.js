import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
 
    state= {
      input :""

    }

    inputHandler = (event ) =>{

      this.setState({
        input : event.target.value
      });
      

    }
  render() {
    return (
      <div className="App">
      
      <input type="text" value={this.state.input} onChange={this.inputHandler}/>
      
      </div>
    );
  }
}

export default App;
