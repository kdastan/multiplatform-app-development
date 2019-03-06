import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-ui'
import TextField from './TextField';

const values = ['All', 'choco', 'icecream', 'soft']
const candies = [
  {name: 'Chocolate', type: 'choco'}, 
  {name: 'Lollypop', type: 'icecream'}, 
  {name: 'Icecream', type: 'icecream'}, 
  {name: 'JellyBean', type: 'soft'}
]

export default class App extends React.Component {
  state = {
    isTextInputSelected: false,
    selectedIndex: 0,
    tempCandies: candies,
    tempTempCandies: candies
  }

  renderRow = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.rowContainer}>
          <Text style={styles.rowHeader}>{item.name}</Text>
          <Text style={styles.rowCategory}>{item.type}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  filterArray = (text) => {
    const { tempTempCandies } = this.state;
    const updatedArray = tempTempCandies.filter((item) => { return item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1})

    this.setState({ tempCandies: updatedArray })
  }

  handleIndexChange = (index) => {
    let updatedArray = candies

    if(index !== 0) {
      const currentValue = values[index]
      updatedArray = candies.filter((item) => item.type === currentValue)
    } 

    this.setState({
        selectedIndex: index,
        tempCandies: updatedArray,
        tempTempCandies: updatedArray
    });
  }

  renderSeparator = () => {
    return <View style={styles.separator} />
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextField
            onChangeText={this.filterArray}
            isTextInputSelected={this.state.isTextInputSelected} 
            onFocus={() => { this.setState({isTextInputSelected: true}) }}
            onBlur={() => { this.setState({isTextInputSelected: false}) }}
          />
          <SegmentedControlTab
            values={values}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
            tabsContainerStyle={{borderColor: 'white'}}
            activeTabStyle={{backgroundColor: 'white'}}
            tabStyle={{backgroundColor: 'transparent', borderLeftColor: 'white'}}
            tabTextStyle={{color: 'white'}}
            activeTabTextStyle={{color: 'green'}}
          />
        </View>
        <View style={styles.body}>
          <FlatList
            data={this.state.tempCandies}
            extraData={this.state}
            renderItem={this.renderRow}
            ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rowContainer: { 
    paddingVertical: 5 
  },
  rowHeader: { 
    fontSize: 16, 
    fontWeight: '600' 
  },
  rowCategory: { 
    fontSize: 12 
  },
  separator: { 
    height: 1, 
    backgroundColor: '#ddd'
  },
  header: { 
    flex: 1.5, 
    backgroundColor: 'green', 
    paddingHorizontal: 14, 
    paddingBottom: 5
  },
  body: {
    flex: 8.5, 
    marginHorizontal: 14
  }
});
