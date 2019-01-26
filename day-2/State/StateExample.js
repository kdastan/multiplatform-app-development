import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Counter: {this.state.counter}</Text>

        <TouchableOpacity
          style={styles.touchableText}
          onPress={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}>
          <Text style={styles.paragraph}>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchableText}
          onPress={() => {
            this.setState({ counter: this.state.counter - 1 });
          }}>
          <Text style={styles.paragraph}>Decrement</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginVertical: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  touchableText: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 12,
    width: '100%',
  },
});
