import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import AddPaletteModal from './screens/AddPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const App = () => {
  const MainStackScreen = () => {
    return (
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </MainStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="AddPaletteModal" component={AddPaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
