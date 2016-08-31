import React, { Component } from 'react'
import { View, StyleSheet,TouchableWithoutFeedback , Text, Platform, Animated } from 'react-native'

var SPRING_CONFIG = {tension: 2, friction: 3};

class MenuDropdown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bounceValue: new Animated.ValueXY(),
            clicked: false
        }
    }
  
    _playAnimation() {
      Animated.spring(this.state.bounceValue, {
          SPRING_CONFIG,
          toValue: {x: 0, y: 28},          
      }).start();
    }
    
    render() {
        if(this.props.shouldShow) {
            this._playAnimation()
            return (
                <Animated.View style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, right: 0, left: 0,
                                      transform: this.state.bounceValue.getTranslateTransform()}} >
                    <TouchableWithoutFeedback onPress={this.props.onClick}>
                        <View style={{ flex: 1 }} />
                    </TouchableWithoutFeedback>

                    <View style={styles.menuContainer}>
                        {this.props.children}
                    </View>
                </Animated.View>
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
        top: 0,
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

MenuDropdown.PropTypes = {
    onClick: React.PropTypes.func.isRequired,
    children: React.PropTypes.any
}

module.exports = MenuDropdown