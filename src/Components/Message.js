import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Message.css';

const Message = (props) => {


  const isUser = props.username === props.msg.username;
    return (
        <div className={`message_card ${isUser && 'message_user'}`}>
          <Card className={isUser ? "message__userCard" : "message__guestCard"} >
            <CardContent>

              <Typography color ="white"
              variant="h5"
              component="h2">
                {props.msg.username} : {props.msg.input}
                </Typography>

            </CardContent>
            </Card>
         
        </div>
    )
}

export default Message
