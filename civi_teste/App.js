



import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import store from './src/store';
import DetailsScenes from './src/scenes/DetailScenes';
import HomeScene from './src/scenes/HomeScene';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScene} />
          <Stack.Screen name="Details" component={DetailsScenes} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
// export default connect(state => ({ modules: state.modules}))(Sidebar);