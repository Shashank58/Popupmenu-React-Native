import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'

class MenuItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick}>
                {this.props.children}
            </TouchableOpacity>
        )
    }
}

MenuItem.PropTypes = {
    children: React.PropTypes.any,
    onClick: React.PropTypes.func.isRequired
}

module.exports = MenuItem