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
        <Tinder/>
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
