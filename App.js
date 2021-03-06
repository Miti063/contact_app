import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './src/components/Header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerTitle='ContactsApp' />
        <FlatList
        // style={{marginTop:30}}
          data={[{ key: 'a' }, { key: 'b' }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
