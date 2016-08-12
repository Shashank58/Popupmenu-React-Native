/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';

import Menu from './Menu'

class PopupMenu extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <Menu />
            </View>
        )
    }
}

AppRegistry.registerComponent('PopupMenu', () => PopupMenu);
