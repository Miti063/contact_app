import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

Header = (props) => {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>{props.headerTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: '#2E8B57',
    justifyContent: 'center',
    paddingLeft: 20
  },
  text: {
    color: '#FFF',
    fontSize: 18
  }
});

export default Header;

