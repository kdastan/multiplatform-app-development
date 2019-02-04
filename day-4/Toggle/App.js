import React from 'react';
import { FlatList, View } from 'react-native';

import { Switch } from 'react-native-paper';

import Card from './Card';

const dataArray = [
  { name: 'Marry' },
  { name: 'Harry' },
  { name: 'Sherlock' },
  { name: 'Tom' },
  { name: 'Jerry' },
  { name: 'Robert' },
];

export default class App extends React.Component {
  state = {
    isSwitchOn: false,
  };

  renderList = () => {
    const { isSwitchOn } = this.state;

    return (
      <FlatList
        data={dataArray}
        renderItem={({ item }) => {
          return <Card name={item.name} />;
        }}
      />
    );
  };

  render() {
    const { isSwitchOn, user } = this.state;

    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <Switch
          value={isSwitchOn}
          onValueChange={() => {
            this.setState({ isSwitchOn: !isSwitchOn });
          }}
        />
        {isSwitchOn && this.renderList()}
      </View>
    );
  }
}
