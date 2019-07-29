import React from 'react';


class DrumPad extends React.Component {

    playAudio = () => {
        const audio = document.getElementById(this.props.id);
        audio.currentTime = 0;
        audio.play();
    };

    render () {
        return (
            <div className="drum-pad" onClick={this.playAudio}>
                <audio src={this.props.clip} className="clip" id={this.props.id}></audio>
                {this.props.id}
            </div>
        );
    }
}

export default DrumPad;
