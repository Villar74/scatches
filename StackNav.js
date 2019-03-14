import { createStackNavigator } from 'react-navigation';

import Login from 'js/screens/Login';
import OrdersList from 'js/screens/OrdersList';
import Camera from 'js/screens/Camera';
import Route from 'js/screens/Route';
import MainScreen from 'js/screens/MainScreen';

/**
 * Routes
 */
const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    OrdersList: {
      screen: OrdersList,
      navigationOptions: ({ navigation }) => ({
        title: `OrdersList`,
      }),
    },
    Route: {
      screen: Route,
    },
    MainScreen: {
      screen: MainScreen,
    },
    Camera: {
      screen: Camera,
    },
  },
  {
    initialRouteName: 'MainScreen',
  }
);

RootStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
export default RootStack;
