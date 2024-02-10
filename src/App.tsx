import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import analytics from '@react-native-firebase/analytics';
import Dashboard from './screens/Dashboard.tsx';
import Details from './screens/Details.tsx';

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  useEffect(() => {
    analytics()
      .getAppInstanceId()
      .then(instanceId => {
        console.log(`Analytics instance ID: ${instanceId}`);
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Dashboard'}>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }: any) => ({ title: route.params?.name || 'N/A' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default App;
