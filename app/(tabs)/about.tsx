import { Text, View } from 'react-native';

import { useSession } from '@/context/AuthProvider';

export default function About() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        About Page
      </Text>
    </View>
  );
}