import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      // You can set another container style:
      // - containerVertical
      // - containerHorizontal
      // - containerSpaceBetween
      // - containerFlexStart
      // - containerFlexEnd
      <View style={styles.containerFlexEnd}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#2ecc71',
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#1abc9c',
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#9b59b6',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerVertical: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2980b9',
  },
  containerHorizontal: {
    flex: 1,
    flexDirection: 'row', // Changes primary axes from vertical to horizontal
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2980b9',
  },
  containerSpaceBetween: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', // Adds space between children
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2980b9',
  },
  containerFlexStart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start', // Aligns all children components to the start
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2980b9',
  },
  containerFlexEnd: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end', // Algins all children components to the end
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2980b9',
  },
});
