import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function App(): React.JSX.Element {
  const [count, setCount] = useState(-1);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.textCount}>Meeting count: {count}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  textCount: {
    color: '#000',
  },
});

export default App;
