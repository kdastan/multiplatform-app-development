import React from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions,
} from 'react-navigation';

// Home screen has textFeld which is passes value on button press using navigation
class Home extends React.Component {
  state = {
    text: '',
  };

  updateText = text => {
    this.setState({ text: text });
  };

  render() {
    const { text } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          placeholder="Enter Text"
          onChangeText={this.updateText}
          style={{ fontSize: 20, marginBottom: 14 }}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Details', { text: text });
          }}>
          <Text>Navigate to Details Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Details screen get's param from previous screen and displays it on screen
// Below you can see how this screen handles param and displays it on navBar and customizes it
class Details extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Reset');
          }}>
          <Text>Navigate to Reset Screen</Text>
        </TouchableOpacity>
        <Text>{this.props.navigation.getParam('text')}</Text>
      </View>
    );
  }
}

// In Reset screen realized reset navigation which navigates to Home screen, without navigation history
// Below you can see how you can remove navBar
class Reset extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })],
              })
            );
          }}>
          <Text>Navigate to Reset Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home screen',
      },
    },
    Details: {
      screen: Details,
      navigationOptions: ({ navigation }) => {
        return {
          title: navigation.getParam('text'),
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        };
      },
    },
    Reset: {
      screen: Reset,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
