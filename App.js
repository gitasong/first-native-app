import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Input from "./components/input/Input.js";
import Tinder from "./components/tinder/Tinder.js";

export default class App extends React.Component {

  state = {
    value: "",
    jokes: []
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          value={this.state.value}
          onChange={(value) => this.setState({value: value})}
          updateJokes={(jokes) => this.setState({jokes: jokes})}
        />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
