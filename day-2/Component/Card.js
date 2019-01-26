import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Card extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{this.props.name}</Text>
        <Text style={styles.paragraph}>{this.props.surname}</Text>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://www.altfg.com/film/wp-content/uploads/images/2013/12/mary-poppins-julie-andrews-national-film-registry.jpg',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    paddingVertical: 8,
    fontSize: 24,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Card;
