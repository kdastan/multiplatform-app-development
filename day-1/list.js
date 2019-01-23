import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const arr = [
  {
    title: 'Almaty',
  },
  {
    title: 'Astana',
  },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={arr} renderItem={this.cellItem} />
      </View>
    );
  }

  cellItem = ({ item }) => {
    return (
      <React.Fragment>
        <Text style={styles.title}>{item.title}</Text>
      </React.Fragment>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
  },
});
