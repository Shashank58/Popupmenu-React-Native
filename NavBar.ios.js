import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

class NavBar extends Component {

    render() {
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={{backgroundColor: this.props.backgroundColor || 'green', height: 20}} />
                <View style={styles.navBar}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
    },
    navBar: {
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
        backgroundColor: this.props.backgroundColor || 'green'
    },
})

NavigationBar.propTypes = {
    children: React.PropTypes.any
}

module.exports = NavBar