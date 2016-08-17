/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';

import Menu from './Menu'
import MenuDropdown from './MenuDropdown'
import MenuItem from './MenuItem'

class PopupMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuClicked: false
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flexDirection: 'row', backgroundColor: 'black', marginTop: 20,
                    justifyContent: 'flex-end'
                }}>
                    <Menu onClick={() => this.setState({ isMenuClicked: true }) } />
                </View>
                <MenuDropdown onClick={() => this.setState({ isMenuClicked: false }) }
                    shouldShow={this.state.isMenuClicked}>
                    <MenuItem onClick={() => {
                            this.setState({isMenuClicked: false})
                        }}>
                        <Text>Something</Text>
                    </MenuItem>
                    <MenuItem>
                        <Text>Something</Text>
                    </MenuItem>
                    <MenuItem>
                        <Text>Something</Text>
                    </MenuItem>
                    <MenuItem>
                        <Text>Something</Text>
                    </MenuItem>
                </MenuDropdown>
            </View>
        )
    }
}

AppRegistry.registerComponent('PopupMenu', () => PopupMenu);
