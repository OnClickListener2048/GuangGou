/**
 * Created by dagou on 2018/5/9.
 */
import SplashScreen from 'react-native-splash-screen'
import React, { Component } from 'react';
import {Text,} from "react-native"
export default class WelcomePage extends Component {

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        setInterval(() => {
            SplashScreen.hide();
            this.props.navigation.navigate('MainPage');
        },1500);

    }

    render(){
        return <Text/>
    }
}