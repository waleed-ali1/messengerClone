import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
 
    state= {
      input :"",
      messages : []
    }

    inputHandler = (event ) =>{

      this.setState({
        input : event.target.value
      });
    
    }

     
    sendMessage = () => {

      const newMessagesArray = [...this.state.messages];
      newMessagesArray.push(this.state.input);
      this.setState({
        messages : newMessagesArray
      });
      // return newMessagesArray;
      console.log(newMessagesArray);

    }

   
  render() {

    // const messagesList = () =>{

    //   this.state.messages.map(msg =>{
    //     return(
    //       <p>{msg}</p>
    //     )
    //   })

    // }

    return (
      <div className="App">
      
      <form> 
      <input type="text" value={this.state.input} onChange={this.inputHandler}/>

      <button onClick={this.sendMessage}> Send Message</button>

      </form>

        {this.state.messages.map( msg => {
          return(
          <p>{msg}</p>
          )
        }) }
      
  



      </div>
    );
  }
}

export default App;
