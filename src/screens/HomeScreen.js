import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HomeScreen extends Component {

  /*
  1. Add state to this Component that is set to empty array
  2. Create a text box and button that adds a list or value to the state 
  3. Somehow pass that state to the listScreen and display that info there 
  */

  render() {
    return (
      <View style={styles.container}>
        <Text>SUp Nick</Text>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
