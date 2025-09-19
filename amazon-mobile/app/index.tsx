import { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';

export default function Index() {
  const [data, setDate] = useState(null);

  const API_BASE =
    process.env.EXPO_PUBLIC_API_URL ?? (Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000');

  useEffect(() => {
    fetch(`${API_BASE}/articles`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDate(data);
      });
  }, []);

  return (
    <View className='flex-1 items-center justify-center '>
      <Text className='text-red-500 font-bold'>Edit app/index.tsx to edit this screen.</Text>
      {data && <Text className='text-dark'>API date: {JSON.stringify(data)}</Text>}
    </View>
  );
}
