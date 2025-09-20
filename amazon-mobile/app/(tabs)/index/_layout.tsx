import React from 'react';
import { StyledStack } from '@/components/navigation/stack';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <StyledStack contentClassName='bg-gray-100 dark:bg-dark' headerClassName='bg-dark text-white'>
      <Stack.Screen name='index' options={{ title: '' }} />
    </StyledStack>
  );
};

export default Layout;
