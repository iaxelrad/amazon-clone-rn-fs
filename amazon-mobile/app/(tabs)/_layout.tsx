import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyledTabs } from '@/components/navigation/tabs';

const Layout = () => {
  return (
    <StyledTabs headerClassName='bg-dark text-white'>
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='person-outline' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='cart'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='cart-outline' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='more'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='menu-outline' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='rufus'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='person-outline' color={color} size={size} />,
        }}
      />
    </StyledTabs>
  );
};

export default Layout;
