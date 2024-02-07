import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import analytics from '@react-native-firebase/analytics';
import database from '@react-native-firebase/database';

function App(): React.JSX.Element {
  const [count, setCount] = useState(-1);

  useEffect(() => {
    analytics()
      .getAppInstanceId()
      .then(instanceId => {
        console.log(`Analytics instance ID: ${instanceId}`);
      });

    database()
      .ref('/channels/test')
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
      });

  }, []);

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
