import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import rufusIcon from '@/assets/images/rufus.png';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const [tabBarWidth, setTabBarWidth] = useState(0);
  const tabWidth = tabBarWidth / state.routes.length;
  const translateX = useSharedValue(state.index * tabWidth);

  const indicatorPadding = 20;
  const indicatorWidth = tabWidth > 2 * indicatorPadding ? tabWidth - 2 * indicatorPadding : tabWidth;

  useEffect(() => {
    translateX.value = withTiming(state.index * tabWidth + indicatorPadding, { duration: 250 });
  }, [state.index, tabWidth]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      className='flex-row bg-white border-t border-gray-200'
      onLayout={e => setTabBarWidth(e.nativeEvent.layout.width)}
    >
      {tabBarWidth > 0 && (
        <Animated.View
          className='absolute top-0 left-0 z-10 bg-dark h-1 rounded-b-lg'
          style={[{ width: indicatorWidth }, indicatorStyle]}
        />
      )}
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={index}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            className='flex-1 py-2 items-center justify-center pb-safe'
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {options.tabBarIcon && route.name !== 'rufus' ? (
              options.tabBarIcon({
                focused: isFocused,
                color: '#000',
                size: 24,
              })
            ) : (
              <Image source={rufusIcon} className='w-12 h-12' resizeMode='contain' />
            )}
          </PlatformPressable>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
