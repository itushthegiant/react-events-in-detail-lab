// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    render() {
        return (
            <div>
                <button
                onClick={this.props.onReceiveCoordinates}
                >
                </button>
            </div>
        )
    }
}
