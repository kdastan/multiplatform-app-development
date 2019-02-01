import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Card from './Card';
import Button from './Button';

export default class App extends React.Component {
  state = {
    count: 0
  }

  handlePress = () => {
    this.setState({ count: this.state.count + 1 })
  };

  render() {
    return (
      <View style={styles.container}>
        <Card countNumber={this.state.count} />
        <Button onPress={this.handlePress} />
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
