import React, { Component } from 'react';

class SimpleComponent extends Component {
    constructor(){
        super();
        
        this.state = {
            mood: 'happy'
        };
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        var moodChange = this.state.mood === 'happy' ? 'sad' : 'happy';
        
        this.setState({
            mood: moodChange
        });
    }
    
    render() {
        return (
            <div onClick={ this.handleClick }>
                { this.state.mood }
            </div>
        );
    }
}

export default SimpleComponent;