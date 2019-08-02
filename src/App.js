import React, {Component} from 'react';
import './App.css';
import Drumkit from './components/drumkit';

class App extends Component {
    render() {
        return (
            <div className="full-screen">
                <Drumkit/>
            </div>
        );
    }
}

export default App;
