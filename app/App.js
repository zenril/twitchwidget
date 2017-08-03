import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Chat from './components/Chat.js';
import Home from './components/Home.js';

const App = React.createClass
({ 
    render: function ()
    {
        return ( 
            <div id='widget-chat' className="widget chat">
                <Router>
                    <div>

                        <Route exact path="/chat/:name" component={Chat} />
                        <Route exact path="/" component={Home} />
                        
                    </div>
                </Router>
            </div>
        );
    }
});

ReactDom.render(<App/>, document.getElementById("app"));