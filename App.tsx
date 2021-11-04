import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {globalStyles} from './src/theme/globalStyles';

const App = () => {
  return (
    <SafeAreaView style={globalStyles.fondo}>
      <StatusBar backgroundColor="black" />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
