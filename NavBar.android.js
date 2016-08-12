import React, { Component } from 'react'
import { View, StyleSheet, Text, StatusBar } from 'react-native'

class NavBar extends Component {
    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor= {GLOBAL.COLORS.COLOR_PRIMARY_DARK}
                    barStyle='light-content'
                />
                <View style={styles.navBar}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        height: 55
    },
    navBar: {
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
        backgroundColor: GLOBAL.COLORS.COLOR_PRIMARY,
        elevation: 4
    }
})

NavigationBar.propTypes = {
    children: React.PropTypes.any
}

module.exports = NavBar