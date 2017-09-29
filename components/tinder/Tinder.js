import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Card extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.joke}</Text>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  render() {
    return {
      <View></View>
    }
  }
}
