import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

import Card from './Card';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card name={'Marry'} surname={'Poppins'} />
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
    backgroundColor: '#2980b9',
  },
});
