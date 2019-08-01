import React from 'react';


class DrumPad extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        };
    }

    playAudio = () => {
        const audio = document.getElementById(this.props.id);
        audio.currentTime = 0;
        audio.play();
        this.padClickAnimation();
    };

    padClickAnimation = () => {
        this.setState({
            clicked: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    clicked: false
                });
            },100);
        });
    };

    render () {
        const classes = this.state.clicked? 'drum-pad clicked' : 'drum-pad';
        return (
            <div className={classes} onClick={this.playAudio}>
                <audio src={this.props.clip} className="clip" id={this.props.id}></audio>
                {this.props.id}
            </div>
        );
    }
}

export default DrumPad;
