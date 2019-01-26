import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Card extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri:
                'https://www.altfg.com/film/wp-content/uploads/images/2013/12/mary-poppins-julie-andrews-national-film-registry.jpg',
            }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.userInfoContainer}>
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{this.props.name} Poppins</Text>
          </View>
          <View style={styles.userPhoneContainer}>
            <Text>87076563232</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#2980b9',
  },
  avatarContainer: {
    flex: 3,
    padding: 12,
  },
  avatar: {
    flex: 1,
    borderRadius: 50,
  },
  userInfoContainer: {
    flex: 7,
    padding: 12,
  },
  userNameContainer: {
    flex: 5,
    justifyContent: 'center',
  },
  userPhoneContainer: {
    flex: 5,
    justifyContent: 'center',
  },
  userName: {
    fontWeight: 'bold',
  },
});

export default Card;
