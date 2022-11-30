import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoverPage from './src/pages/DiscoverPage/DiscoverPage';
import TasksPage from './src/pages/TasksPage/TasksPage';
import ProjectsPage from './src/pages/ProjectsPage/ProjectsPage';
import SubscriptionPage from './src/pages/SubscriptionPage/SubscriptionPage';

const App = () => {
  const BottomTab = createBottomTabNavigator();

  return (

    <NavigationContainer>

      <BottomTab.Navigator>

        <BottomTab.Screen name="Keşfet"   component={DiscoverPage} options={{ headerShown: false }} />
        <BottomTab.Screen name="Görevler" component={TasksPage} />
        <BottomTab.Screen name="Projeler" component={ProjectsPage} />
        <BottomTab.Screen name="Abonelik" component={SubscriptionPage} />

      </BottomTab.Navigator>

    </NavigationContainer>
  );

};


export default App;
