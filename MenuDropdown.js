import React, { Component } from 'react'
import { View, StyleSheet,TouchableWithoutFeedback, Text, Platform } from 'react-native'

class MenuDropdown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }
    
    render() {
        console.log('Pops ', this.props.shouldShow)
        if(this.props.shouldShow) {
            return (
                <View style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} >
                    <TouchableWithoutFeedback onPress={this.props.onClick}>
                        <View style={{ flex: 1 }}/>
                    </TouchableWithoutFeedback>

                    <View style={styles.menuContainer}>
                        <TouchableWithoutFeedback onPress={() => this.props.cb() }>
                            <View><Text>Something</Text></View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.props.cb() }>
                            <View><Text>Something</Text></View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.props.cb() }>
                            <View><Text>Something</Text></View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            )
        } else {
            return null
        }
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        padding: 12,
        position: 'absolute',
        top: 28,
        right: 8,
        ...Platform.select({
        android: {
            elevation: 4
        },
        ios: {
            shadowColor: "black",
            shadowOpacity: 0.6,
            shadowRadius: 2,
            shadowOffset: {
                height: 1,
                width: 0
            }
        }
    })
    }
})

module.exports = MenuDropdown