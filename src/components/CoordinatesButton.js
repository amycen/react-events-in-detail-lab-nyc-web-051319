// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinateButtons extends Component {
    
    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    render() {
        return (
            <button onClick={this.handleClick}></button>
        );
    }
}

export default CoordinateButtons;
