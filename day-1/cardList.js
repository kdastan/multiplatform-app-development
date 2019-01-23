import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const arr = [
  {
    title: 'Pepsi',
    description: 'Here, it`s Pepsi',
    uri: 'https://brandmark.io/logo-rank/random/pepsi.png',
  },
  {
    title: 'Adidas',
    description: 'Impossible is Nothing',
    uri:
      'https://cdn2.bigcommerce.com/server1500/ac84d/products/1204/images/2688/Adidas_Logo_Flower__83153.1337144903.380.380.jpg?c=2',
  },
  {
    title: 'Apple',
    description: 'Think different',
    uri: 'https://image.freepik.com/free-icon/apple-logo_318-40184.jpg',
  },
  {
    title: 'PlayStation',
    description: 'Greatness awaits',
    uri:
      'https://img.freepik.com/icone-gratis/logo-playstation_318-10089.jpg?size=338&ext=jpg',
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
        <TouchableOpacity
          onPress={() => {
            console.log(item);
          }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.description}</Text>
          <Image style={styles.icon} source={{ uri: item.uri }} />
        </TouchableOpacity>
      </React.Fragment>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
  },
});
