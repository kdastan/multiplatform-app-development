import React from 'react';
import { FlatList } from 'react-native';

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
  render() {
    return (
      <FlatList
        data={dataArray}
        renderItem={({ item }) => {
          return <Card name={item.name} />;
        }}
      />
    );
  }
}
