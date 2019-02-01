import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from './Button';

const URL =
  'https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=3';

export default class App extends React.Component {
  handlePress = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    const books = data.items.map(book => {
      return {
        title: book.volumeInfo.title,
        publishedDate: book.volumeInfo.publishedDate
      }
    });

    console.log(books)
  };

  render() {
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
  },
});
