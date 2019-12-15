import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ToastAndroid
} from "react-native";
import firebase from 'firebase'
import colors from "../styles/colors";
import transparentHeaderStyle from '../styles/navigation';
export default class CreateAccount extends Component {
  state = {email: '', password: '', errorMessage: null};
  constructor(props) {
    super(props);

  this.signupNow = this.signupNow.bind(this);
  }
  static navigationOptions = () => ({
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white,
  });

  signupNow = () => {
    if (this.state.email && this.state.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('TurnOnNotifications'))
        .catch(error => this.setState({errorMessage: error.message}));
    } else {
      ToastAndroid.show('Please fill all the fields!', ToastAndroid.LONG);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: colors.white, fontSize: 40}}>Create Account</Text>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => {
            this.setState({password});
          }}
          value={this.state.password}
        />
        {this.state.errorMessage && (
          <Text style={{color: colors.darkOrange}}>{this.state.errorMessage}</Text>
        )}
        <View style={{marginVertical: 20}}>
          <Button
            title="Sign Up"
            color={colors.green02}
            onPress={() => this.signupNow()}
          />
        </View>

        <View>
          <Text>
            Already have an account?
            <Text
              onPress={() => this.props.navigation.navigate('LogIn')}
              style={{color: colors.white, fontSize: 18}}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.green01
  },
  textInput: {
    height: 40,
    fontSize: 15,
    width: '90%',
    borderColor: colors.white,
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15,
    color:colors.white,
  },
});
