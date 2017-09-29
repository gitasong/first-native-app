import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {

  fetchData() {
    console.log("the value is: ", this.props.value);
    fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
    .then((response) => { return response.json() })
    .then((data) => console.log("data: ", data));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType={'numeric'}
          value={this.props.value}
          onChangeText={(text) => this.props.onChange(text)}
          style={styles.input}
        />
      <TouchableHighlight
        onPress={() => this.fetchData()}
        style={styles.button}
        >
        <Text
          style={styles.text}
        >Search</Text>
      </TouchableHighlight>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 2
  },
  button: {
    backgroundColor: "teal",
    height: 40,
    width: 100,
    borderColor: "gray,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  }
});
