import React, { useEffect, useState } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { onMeetingsUpdated } from '../services/meetings.ts';
import { Meeting } from '../types/business.ts';

const Dashboard = ({ navigation }: any) => {
  const [activeMeetings, setActiveMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    const unsubscribeMeetingsRef = onMeetingsUpdated(setActiveMeetings);

    return () => {
      unsubscribeMeetingsRef();
    };
  }, []);

  const handleNavigateToDetails = (meeting: Meeting) => {
    navigation.navigate('Details', { uid: meeting.uid, name: meeting.name });
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={[{ title: 'Active Meetings', data: activeMeetings }]}
        renderItem={({ item }) =>
          <Text style={styles.item} onPress={() => handleNavigateToDetails(item)}>{item.name}</Text>
        }
        renderSectionHeader={({ section }) => (<Text style={styles.sectionHeader}>{section.title}</Text>)}
        keyExtractor={item => item.uid as string}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: 'rgba(247,247,247,1.0)',
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  item: {
    fontSize: 18,
    height: 44,
    padding: 12,
  },
});

export default Dashboard;
