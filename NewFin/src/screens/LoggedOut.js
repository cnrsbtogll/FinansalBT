import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import styles from './styles/LoggedOut';

const newfinLogo = require('../img/NewFin-logo.png');

export default class LoggedOut extends Component {
  constructor(props) {
    super(props);

  this.onCreateAccountPress = this.onCreateAccountPress.bind(this);
  this.onLogInPress = this.onLogInPress.bind(this);
  }
  static navigationOptions = () => ({
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white,
  });
 
  onLogInPress() {
    this.props.navigation.navigate('LogIn');
  }

  onCreateAccountPress() {
     this.props.navigation.navigate('CreateAccount');
  }

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={newfinLogo}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>
Welcome to NewFin.
          </Text>
          <RoundedButton
            text="Log In"
            textColor={colors.green01}
            background={colors.white}
            icon={<Icon name="sign-in" size={20} style={styles.logInButtonIcon} />}
            handleOnPress={this.onLogInPress}
          />         
          <RoundedButton
            text="Create Account"
            textColor={colors.white}           
            handleOnPress={this.onCreateAccountPress}
          />
        </View>
      </ScrollView>
    );
  }
}