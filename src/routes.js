import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './Pages/Login';
import Register from './Pages/Register';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
  }),
);
