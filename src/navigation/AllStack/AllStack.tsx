import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoryScreen, DetailsScreen, SplashScreen } from '../../screens';


const Stack = createNativeStackNavigator();
const AllStack = () => {
  return (
    <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown:false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default AllStack

const styles = StyleSheet.create({})