import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

class MenuContext extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                {this.props.children}
            </View> 
        )
    }
}