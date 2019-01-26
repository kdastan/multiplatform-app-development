import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touchableText}
          onPress={() => console.log(new Date())}>
          <Text style={styles.paragraph}>
            Touchable text by touchableOpacity
          </Text>
        </TouchableOpacity>

        <View style={styles.buttonWrapper}>
          <Button
            title="Button component"
            onPress={() => console.log(new Date())}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  touchableText: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
  },
  buttonWrapper: {
    marginTop: 8,
  },
});
