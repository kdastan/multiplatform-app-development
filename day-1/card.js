import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Title</Text>
          <Image style={styles.icon} source={require('./assets/snack-icon.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
  },
});
