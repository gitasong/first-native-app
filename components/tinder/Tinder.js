import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Card extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>{this.props.joke}</Text>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  render() {
    return (
      <View style={styles.card}>No More Cards</View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderColor: "#ea394b",
    borderWidth: 2,
    backgroundColor: "#04b1ff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
