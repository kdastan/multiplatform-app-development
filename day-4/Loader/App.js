import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Button from './Button';

const URL =
  'https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=3';

export default class App extends React.Component {
  state = {
    isLoading: false,
  };

  handlePress = async () => {
    this.setState({ isLoading: true });
    console.log('Books started loading')
    const response = await fetch(URL);
    const data = await response.json();
    this.setState({ isLoading: false });
    console.log('Books finished loading')

    const books = data.items.map(book => {
      return {
        title: book.volumeInfo.title,
        publishedDate: book.volumeInfo.publishedDate,
      };
    });

    console.log(`Loaded - ${books}`);
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size={'Large'} isLoading={true} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Button onPress={this.handlePress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
