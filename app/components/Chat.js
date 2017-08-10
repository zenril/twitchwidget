//todo make DLL for shared libraries
import React from 'react';
import ReactDom from 'react-dom';
import Set from 'classset';
import Twitch from '../actions/Twitch.js';

const Message = (props) => {
    var style = {
        color : props.user.color
    }
    return (<div className="user-message row" style={props.styles}>
        <div className='col-xs-4 name'>
            <span style={style}> {props.user.username} </span>
        </div>
        <div className='col-xs-8 text'>
            {props.message}
        </div>
    </div>)
}

export default class Chat extends React.Component
{


    constructor(props) 
    {
        super(props);
        this.state = {
            channel : props.match.params["name"],
            messages : []
        };
        this.twitch = new Twitch(props.match.params["name"]);

    }

    componentDidMount ()
    {
        var self = this;
        self.twitch.chat(function(channel, user, message) {
            const messages = self.state.messages;
            messages.push( { message : message,  user:user, key:user.id } );
            self.setState({ messages });
            var element = document.getElementById("chat");
            element.scrollTop = element.scrollHeight;
        });
    }

  

    render ()
    {
        var classes = Set
        ({
            "chat" : true
        });

        return (
            <div id='chat' className={classes}>
                {
                    this.state.messages.map(function(item, i){
                        return <Message message={item.message} user={item.user} key={item.key} />;
                    })
                }
            </div>  
        )
    }

}