import * as React from 'react';
import { View, Text, TochableOpacity, StyleSheet } from 'react-native';

export default class PostScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', color: 'black' }}>PostScreen</Text>
        <Text style={{ textAlign: 'center' }}>
          Name:{this.props.route.params.name}
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Caption:{this.props.route.params.caption}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
