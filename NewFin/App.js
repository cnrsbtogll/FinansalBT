import React, { Component } from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import firebase from 'firebase'
import { Provider } from 'react-redux';
import { Root, configureStore} from './src/navigators/AppNavigator';

StatusBar.setBarStyle('light-content', true);
class App extends Component {
  componentDidMount(){
    firebase.initializeApp({      
    apiKey: "AIzaSyClWY07NZX-qw2VRnszAuZXXea7zRA219M",
    authDomain: "newfin-cc93b.firebaseapp.com",
    databaseURL: "https://newfin-cc93b.firebaseio.com",
    projectId: "newfin-cc93b",
    storageBucket: "newfin-cc93b.appspot.com",
    messagingSenderId: "88097853801",
    appId: "1:88097853801:web:eab06d361ae91fbb582df8"
    });
  }
  render() {
  	return (
      <Provider store={configureStore({})}>
         <Root />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);

export default App;