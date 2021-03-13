import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen.component';

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
