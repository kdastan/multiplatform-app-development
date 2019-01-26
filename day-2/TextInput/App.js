import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Constants } from 'expo';

import Card from './Card';

let inputField = null;

export default class App extends React.Component {
  state = {
    name: 'Marry',
  };

  render() {
    return (
      <View style={styles.container}>
        <Card name={this.state.name} surname={'Poppins'} />
        <TextInput
          placeholder={'Enter name'}
          style={styles.nameField}
          onChangeText={input => {
            inputField = input;
          }}
        />
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ name: inputField })}>
          <Text style={styles.buttonTitle}>Change name</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2980b9',
  },
  button: {
    borderWidth: 1,
    borderColor: '#e74c3c',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 36,
    margin: 7,
  },
  nameField: {
    marginTop: 14,
    fontSize: 24,
  },
  buttonTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
});
