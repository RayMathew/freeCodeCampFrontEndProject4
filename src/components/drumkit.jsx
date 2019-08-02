import React from 'react';
import DrumPad from './drumpad';

const audioClips = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];


class Drumkit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: ''
        };
    }

    updateDisplay = (string) => {
        this.setState({
            display: string
        });
    };
    render () {
        return (
            <div id="drum-machine">
                <div id="pads-container">
                    <div id="pads">
                        <DrumPad clip={audioClips[0].url} id={audioClips[0].keyTrigger}
                                                            updateDisplay={this.updateDisplay}
                                                            keyCode={audioClips[0].keyCode}
                                                            display={audioClips[0].id}/>
                        <DrumPad clip={audioClips[1].url} id={audioClips[1].keyTrigger}
                                                            updateDisplay={this.updateDisplay}
                                                            keyCode={audioClips[1].keyCode}
                                                            display={audioClips[1].id}/>
                        <DrumPad clip={audioClips[2].url} id={audioClips[2].keyTrigger}
                                                            updateDisplay={this.updateDisplay}
                                                            keyCode={audioClips[2].keyCode}
                                                            display={audioClips[2].id}/>
                        <DrumPad clip={audioClips[3].url} id={audioClips[3].keyTrigger}
                                                            updateDisplay={this.updateDisplay}
                                                            keyCode={audioClips[3].keyCode}
                                                            display={audioClips[3].id}/>
                        <DrumPad clip={audioClips[4].url} id={audioClips[4].keyTrigger}
                                                            updateDisplay={this.updateDisplay}
                                                            keyCode={audioClips[4].keyCode}
                                                            display={audioClips[4].id}/>
                        <DrumPad clip={audioClips[5].url} id={audioClips[5].keyTrigger}
                                                            updateDisplay={this.updateDisplay}
                                                            keyCode={audioClips[5].keyCode}
                                                            display={audioClips[5].id}/>
                        <DrumPad clip={audioClips[6].url} id={audioClips[6].keyTrigger}
                                                            updateDisplay={this.updateDisplay}
                                                            keyCode={audioClips[6].keyCode}
                                                            display={audioClips[6].id}/>
                        <DrumPad clip={audioClips[7].url} id={audioClips[7].keyTrigger}
                                                            updateDisplay={this.updateDisplay}
                                                            keyCode={audioClips[7].keyCode}
                                                            display={audioClips[7].id}/>
                        <DrumPad clip={audioClips[8].url} id={audioClips[8].keyTrigger}
                                                            updateDisplay={this.updateDisplay}
                                                            keyCode={audioClips[8].keyCode}
                                                            display={audioClips[8].id}/>
                    </div>
                </div>
                <div id="display-container">
                    <div id="display">
                        {this.state.display}
                    </div>
                </div>
            </div>
        );
    }
}

export default Drumkit;
