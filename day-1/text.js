import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontSize: 14}}>Title</Text>
          <Text style={{fontSize: 20}}>Title</Text>
          <Text style={{fontSize: 24}}>Title</Text>
          <Text style={{fontSize: 35}}>Title</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  }
});
