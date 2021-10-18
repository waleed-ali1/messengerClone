import React,  { Component } from 'react';
import './App.css';
import Button /*, FormControl, InputLabel, Input }*/ from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import  InputLabel from '@material-ui/core/InputLabel';
import  Input from '@material-ui/core/Input';
import Message from './Components/Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';



 
class App extends Component {

 
    state= {
       input :"",
       username:"",
      messages : [
 
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
      db.collection('users').add({
        input : this.state.input,
        username: this.state.username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      // this.setState({
      //   messages : 
      this.setState({
        input:""
      })
      // return newMessagesArray;
      //console.log(newObj);

    }

    
      componentDidMount = () => {
     

      db.collection('users').orderBy('timestamp','desc').onSnapshot(snapshot => {

        this.setState({
          messages : snapshot.docs.map(doc => doc.data())
        })
        // const newObj = [...this.state.messages];
        // newObj.push(snapshot.docs.map(doc => doc.data()));
        // console.log(newObj);
       })
       
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
