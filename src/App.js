import React,  { Component } from 'react';
import './App.css';
import Button /*, FormControl, InputLabel, Input }*/ from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import  InputLabel from '@material-ui/core/InputLabel';
import  Input from '@material-ui/core/Input';
import Message from './Components/Message';



 
class App extends Component {

 
    state= {
       input :"",
       username:"",
      messages : [
        {
          input:"heyy first object",
          username:"walid"

        },

        {
          input:"heyyy",
          username:"ziad"

        },
        {
          input:"heyyy",
          username:"mhamad"

        }
      ]
    }

     
    inputHandler = (event ) =>{

      this.setState({
        input : event.target.value
      });
    
    }

     
    sendMessage = (event) => {

      event.preventDefault();
     // const newArrObject = [...this.state.messages];  // new array of objects
      //console.log(newObject);
      // const newMessagesArray = [...this.state.messages];
      // newMessagesArray.push(this.state.messages);
      let newUsername = this.state.username;
      let inputUser = this.state.input;
      const newObj = [...this.state.messages];
      newObj.push({input:inputUser,
                    username:newUsername
                    });
      //newArrObject.push(this.state.messages);
      this.setState({
        messages : newObj,
        input:""
      });

      // return newMessagesArray;
      console.log(newObj);

    }


    componentWillMount = () => {

      const user = prompt('Enter your username');
      this.setState({
        username : user 
      })
    }

     
      
  render() {


    return (
      <div className="App">
        
        <h2 className="greeting"> Welcome {this.state.username}</h2>
      
      <form>
          <FormControl>
            <InputLabel > Enter a message ... </InputLabel>
            <Input value={this.state.input} onChange={this.inputHandler} />
            <Button disabled={!this.state.input} variant="contained" onClick={this.sendMessage} color="primary" type="submit">Send</Button>
          </FormControl>
      </form>
  
      {
        this.state.messages.map(msg => {
          return(
            <Message username={this.state.username} msg={msg}/>
          )
        })  
      }

      </div>
    );
  }
}

export default App;
