import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomePages, MainPages} from '../Routes/types';
import Paquetes from './Home/Paquetes';
import Recargas from './Home/Recargas';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<MainPages, 'Home'>;
  route: RouteProp<MainPages, 'Home'>;
}

const Tab = createBottomTabNavigator<HomePages>();

const Home: React.FC<Props> = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          let iconName = 'phone';
          if (route.name === 'Paquetes') {
            iconName = 'cube';
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}>
      <Tab.Screen name="Recargas" component={Recargas} />
      <Tab.Screen name="Paquetes" component={Paquetes} />
    </Tab.Navigator>
  );
};

export default Home;
