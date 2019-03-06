import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

class TextField extends Component {
  renderCancelButton = () => {
    if(!this.props.isTextInputSelected){
      return
    }

    return (
      <TouchableOpacity onPress={this.handleCancelButton}>
        <Text style={styles.cancelButton}>Cancel</Text>
      </TouchableOpacity>
      )
    }

    handleCancelButton = () => {
      this.props.onBlur()
      this.FirstInput.blur()
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={this.props.isTextInputSelected ? styles.innerContainer : styles.innerContainer2}>
            <Image source={require('./assets/search-icon.png') } style={styles.image} />
            <TextInput 
              ref={(ref) => { this.FirstInput = ref; }}
              onChangeText={this.props.onChangeText}
              placeholder="Search"    
              style={styles.textInput} 
              onFocus={this.props.onFocus}
              onBlur={this.props.onBlur}
            />
          </View>
          <View style={{ flex: 1 }}>{this.renderCancelButton()}</View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center'
  },
  innerContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 8,
  },
  innerContainer2: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 8,
  },
  textInput: {
    height: 34,
    fontSize: 16,
    backgroundColor: 'white',
    width: '80%'
  },
  image: {
    width: 20, 
    height: 20, 
    marginHorizontal: 8
  },
  cancelButton: {
    textAlign: 'center', 
    color: 'white'
  }
})

export default TextField;