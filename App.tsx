import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens (replace with your actual components later)
const SaleScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>🛒 New Sale</Text>
  </View>
);

const ProductsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>📦 Products</Text>
  </View>
);

const ReportsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>📊 Sales Reports</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>👤 Profile</Text>
  </View>
);

// Bottom tab navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = '';

            switch (route.name) {
              case 'Sale':
                iconName = focused ? 'cart' : 'cart-outline';
                break;
              case 'Products':
                iconName = focused ? 'cube' : 'cube-outline';
                break;
              case 'Reports':
                iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                break;
              case 'Profile':
                iconName = focused ? 'person' : 'person-outline';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Sale" component={SaleScreen} />
        <Tab.Screen name="Products" component={ProductsScreen} />
        <Tab.Screen name="Reports" component={ReportsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
  },
});

export default App;
