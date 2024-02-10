import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { onMeetingUpdated } from '../services/meetings.ts';
import { Meeting } from '../types/business.ts';

const Details = ({ route }: any) => {
  const uid = route.params.uid;
  const [meeting, setMeeting] = useState<Meeting>();

  useEffect(() => {
    const unsubscribeMeetingRef = onMeetingUpdated(uid, setMeeting);

    return () => {
      unsubscribeMeetingRef();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textParticipants}>
        Number of Attendees
      </Text>
      <Text style={styles.textNumberOfParticipants}>
        {Number.isInteger(meeting?.numberOfParticipants) ? meeting?.numberOfParticipants : 'N/A'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  textParticipants: {
    fontSize: 24,
    textAlign: 'center',
  },
  textNumberOfParticipants: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center',
  },
});

export default Details;
