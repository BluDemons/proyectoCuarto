import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Scooter from '../screens/scooter';
import Registro from '../screens/register';


const DrawerNavigator = createDrawerNavigator({
  'One': Scooter,
  'Two': Registro
});

export default DrawerNavigator;