// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    coordinatesFunc = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
        
    }





    render() {
        return (
            <div>
                <button
                onClick={this.coordinatesFunc}
                >
                </button>
            </div>
        )
    }
}
