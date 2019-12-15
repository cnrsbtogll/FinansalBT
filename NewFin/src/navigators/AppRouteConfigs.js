import {
  createStackNavigator,
} from 'react-navigation';
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';
import TurnOnNotifications from '../screens/TurnOnNotifications';
import LoggedInTabNavigator from './LoggedInTabNavigator';
import CreateAccount from '../screens/CreateAccount';
import NewsWebView from '../containers/NewsWebView'

const AppRouteConfigs = createStackNavigator({
  LoggedOut: { screen: LoggedOut },
  LoggedIn: {
    screen: LoggedInTabNavigator,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  LogIn: { screen: LogIn },
  ForgotPassword: { screen: ForgotPassword },
  TurnOnNotifications: { screen: TurnOnNotifications },
  CreateAccount:{screen:CreateAccount},
  NewsWebView: { screen: NewsWebView },
});

export default AppRouteConfigs;