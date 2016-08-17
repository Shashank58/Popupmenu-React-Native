import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
           <TouchableOpacity onPress={this.props.onClick} style={styles.moreContainer}>
                <Image source={require('./images/more.png')} style={styles.moreIcon} />
           </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    moreContainer: {      
        padding: 8,
    },
    moreIcon: {
        height: 24,
        width: 24,
    }
})

module.exports = Menu