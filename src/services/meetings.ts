import { Meeting } from '../types/business.ts';
import { ref } from '@react-native-firebase/database/lib/modular';
import database from '@react-native-firebase/database';
import { onValue } from '@react-native-firebase/database/lib/modular/query';

export const onMeetingsUpdated = (callback: (meetings: Meeting[]) => void) => {
  const meetingsRef = ref(database(), '/meetings');

  return onValue(meetingsRef, (snapshot) => {
    const meetings = Object.values(snapshot.val() || {});
    callback(meetings as Meeting[]);
  });
};
export const onMeetingUpdated = (uid: string, callback: (meeting: Meeting) => void) => {
  const meetingsRef = ref(database(), `/meetings/${uid}`);

  return onValue(meetingsRef, (snapshot) => {
    callback(snapshot.val() as Meeting);
  });
};
