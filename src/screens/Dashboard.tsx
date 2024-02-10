import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { onMeetingsUpdated } from '../services/attendees.ts';
import { Meeting } from '../types/business.ts';

const Dashboard = () => {
  const [activeMeetings, setActiveMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    const unsubscribeMeetingsRef = onMeetingsUpdated(setActiveMeetings);

    return () => {
      unsubscribeMeetingsRef();
    };
  }, []);

  return (
    <View>
      <Text>This is MeetingsDashboard {activeMeetings.length}</Text>
    </View>
  );
};

export default Dashboard;
