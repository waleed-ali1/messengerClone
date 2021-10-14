import React, { Component } from 'react';
import useEffect from 'react';
import './App.css';
import Button /*, FormControl, InputLabel, Input }*/ from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import  InputLabel from '@material-ui/core/InputLabel';
import  Input from '@material-ui/core/Input';
import Message from './Components/Message';



 
class App extends Component {

 
    state= {
      input :"",
      messages : [],
      username:""
    }



     
    inputHandler = (event ) =>{

      this.setState({
        input : event.target.value
      });
    
    }

     
    sendMessage = (event) => {

      event.preventDefault();
      const newMessagesArray = [...this.state.messages];
      newMessagesArray.push(this.state.input);
      this.setState({
        messages : newMessagesArray,
        input:""
      });
      // return newMessagesArray;
      console.log(newMessagesArray);

    }

    // ComponentDidMount = ()=>{

    //   const user = prompt('Enter your username');
    //   this.setState({
    //     username : user 
    //   })
    //   console.log('yes');
    // }

    
  //   useEffect = (()=>{

  //   const user = prompt('Enter your username');
  //   this.setState({
  //     username : user 
  //   })

  // },[])

    // choosingUser = () =>{
    //   const user = prompt('enter you username ');
    //   this.setState({
    //     username:user
    //   })
    // }
      
  render() {


    return (
      <div className="App">
      
      <form>
          <FormControl>
            <InputLabel > Enter a message ... </InputLabel>
            <Input value={this.state.input} onChange={this.inputHandler} />
            <Button disabled={!this.state.input} variant="contained" onClick={this.sendMessage} color="primary" type="submit">Outlined</Button>
          </FormControl>
      </form>
  
      {
        this.state.messages.map(msg => {
          return(
            <Message text={msg}/>
          )
        })
      }

      </div>
    );
  }
}

export default App;
