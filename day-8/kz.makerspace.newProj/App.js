import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator, createAppContainer } from "react-navigation";

let currentTask = "";

class App extends React.Component {
  state = {
    tasks: [{
      name: "Clean a house",
      status: false
    }]
  }

  render() {
    console.log(this.state.tasks)

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TextInput 
            ref={(ref) => { this.FirstInput = ref; }}
            placeholder="Enter text" 
            style={{ width: 250, height: 40 }} 
            onChangeText={(text) => { currentTask = text }}
            onSubmitEditing={this.handlePress}
          />
          <TouchableOpacity 
            onPress={this.handlePress} 
            style={{ backgroundColor: 'red', height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.tasks} 
          renderItem={this.renderTask} 
          extraData={this.state} 
          style={{paddingTop: 16}}
        />


        <TouchableOpacity onPress={this.navigateToAddTaskScreen} style={{ position: 'absolute', bottom: 40, right: 20 }}>
          <Text>Add Task</Text>
        </TouchableOpacity>
      </View>
    );
  }

  handleTaskFromSecondScreen = (text) => {
    const task = {
      name: text,
      status: false
    }

    const tasks = this.state.tasks

    tasks.push(task)

    this.setState({ tasks: tasks })
  }

  navigateToAddTaskScreen = () => {
    this.props.navigation.navigate('AddTask', { handlePressOnSecondScreen: this.handleTaskFromSecondScreen })
  }

  keyExtractor = (item) => item.name;

  handlePress = () => {

    if(currentTask === "") {
      return
    }

    const tappedText = currentTask
    
    const task = {
      name: tappedText,
      status: false
    }

    const tasks = this.state.tasks

    tasks.push(task)

    this.setState({ tasks: tasks })

    this.FirstInput.clear()
    currentTask = ""
  }

  renderTask = ({ item, index }) => {
    return (
      <View key={index} style={styles.taskContainer}>
        <Text style={item.status ? { textDecorationLine: 'line-through', color: 'red' } : { color: '#0fbcf9' }} >{item.name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{paddingRight: 10}} onPress={() => { this.taskDone(index) }}><Text>{item.status ? "⭕️" : "✅"}</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => { this.removeItem(index) }}><Text>❌</Text></TouchableOpacity>
        </View>
      </View>
    )
  }

  removeItem = (taskIndex) => {
    const tasks = this.state.tasks

    const updateTasks = tasks.filter((_, index) => index !== taskIndex)

    this.setState({ tasks: updateTasks })
  }

  taskDone = (taskIndex) => {
    const tasks = this.state.tasks

    const updatedTasks = tasks.map((item, index) => { 
      if (taskIndex === index) {
        return { ...item, status: !item.status }
      }

      return item
    })

    this.setState({ tasks: updatedTasks })
  }
}

class AddTask extends React.Component {
  state = {
    text: ""
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red', paddingTop: Constants.statusBarHeight }}>
        <TextInput 
          placeholder="Add Task"
          onChangeText={(text) => { this.setState({text}) }}
        />
        <TouchableOpacity onPress={this.handlePress}>
          <Text>Add Task</Text>
        </TouchableOpacity>
      </View>
    )
  }

  handlePress = () => {
    this.props.navigation.state.params.handlePressOnSecondScreen(this.state.text)

    this.props.navigation.goBack()
  }
}


const AppNavigator = createStackNavigator({
  App: {
    screen: App
  },
  AddTask: AddTask
}, {
  headerMode: 'none'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 16
  },
  taskContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 16,
    marginVertical: 4,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#d2dae2',
    marginRight: 16,
    borderRadius: 6
  }
});

export default createAppContainer(AppNavigator);