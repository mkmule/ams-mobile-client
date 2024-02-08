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
        setCount(snapshot.val());
      });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.textTitle}>
          AMS{'\n'}Attendees Monitoring System
        </Text>
        <Text style={styles.textCount}>
          Current number of participants: {count}
        </Text>
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
  textTitle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    marginBottom: 18,
  },
  textCount: {
    textAlign: 'center',
    color: '#000',
  },
});

export default App;
