import React, {Component} from 'react';
import './App.css';
import DrumKit from './components/drumkit';

class App extends Component {
    render() {
        return (
            <div className="full-screen">
                <DrumKit/>
            </div>
        );
    }
}

export default App;
