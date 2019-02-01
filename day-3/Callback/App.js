import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Card from './Card';

export default class App extends React.Component {
  handlePress = () => {
    console.log('Pressed');
  };

  render() {
    return (
      <View style={styles.container}>
        <Card onPress={this.handlePress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
