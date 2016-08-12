import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import MenuDropdown from './MenuDropdown'


class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuShowing: false
        }
    }

    _close() {
        this.setState({ isMenuShowing: false })
    }

    render() {
        const overflowMenu = this.state.isMenuShowing ? null : (
            <TouchableOpacity onPress={() => this.setState({ isMenuShowing: true }) } style={styles.moreContainer}>
                <Image source={require('./images/more.png') } style={styles.moreIcon} />
            </TouchableOpacity>
        )

        const overflow = this.state.isMenuShowing ? (
            <MenuDropdown cb={() => this._close()} />
        ) : null
        return (
            <View style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
                <View style={styles.navBar}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        {overflowMenu}
                    </View>
                </View>
                {overflow}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        height: 45,
        backgroundColor: 'grey',
        marginTop: 20,
        alignItems: 'center',
    },
    moreContainer: {
        alignSelf: 'center',
        padding: 8,
    },
    moreIcon: {
        height: 24,
        width: 24,
    }
})

module.exports = Menu