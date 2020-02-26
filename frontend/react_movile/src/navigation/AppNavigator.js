import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DrawerNavigator from './DreawerNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: DrawerNavigator
  })
);