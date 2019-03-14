import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

import OrdersList from 'js/screens/OrdersList';
import Map from 'js/screens/Map';
import Chat from 'js/screens/Chat';
import Form from 'js/screens/Form';

const TabNavigator = createBottomTabNavigator(
  {
    OrdersList: OrdersList,
    Map: Map,
    Chat: Chat,
    Form: Form,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let params;
        let iconName;
        if (routeName === 'OrdersList') {
          iconName = `ios-list${focused ? '-box' : ''}`;
          params = { name: iconName, type: 'ionicon' };
        } else if (routeName === 'Map') {
          iconName = `map${focused ? '' : '-outline'}`;
          params = { name: iconName, type: 'material-community' };
        } else if (routeName === 'Chat') {
          iconName = `chat-bubble${focused ? '' : '-outline'}`;
          params = { name: iconName, type: 'material' };
        } else if (routeName === 'Form') {
          iconName = `form`;
          params = { name: iconName, type: 'antdesign' };
        }
        return <Icon {...params} color={tintColor} size={25} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);
