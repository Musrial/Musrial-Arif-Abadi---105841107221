import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../assets/Home.jpg';
import HomeAktif from '../assets/HomeAktif.jpg';
import Shop from '../assets/Shop.jpg';
import ShopAktif from '../assets/ShopAktif.jpg';
import Bag from '../assets/bag.png';
import BagAktif from '../assets/bagAktif.png';
import Favorites from '../assets/favorites.png';
import FavoritesAktif from '../assets/favoritesAktif.png';
import Profile from '../assets/profile.png';
import ProfileAktif from '../assets/profileAktif.png';
import HomeScreen from './HomeScreen';
import ShopPage from './ShopPage';
import BagPage from './BagPage';
import FavoritesPage from './FavoritesPage';
import ProfilPage from './ProfilePage';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : Home}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ShopAktif : Shop}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={BagPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? BagAktif : Bag}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? FavoritesAktif : Favorites}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ProfileAktif : Profile}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;