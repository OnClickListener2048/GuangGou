/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import WelcomePage from "./src/pages/WelcomePage";
import MainPage from "./src/pages/MainPage";

import React, {Component} from 'react';
import {} from 'react-native';
import {createStackNavigator} from 'react-navigation';

export default createStackNavigator({
    Welcome: {
        screen: WelcomePage
    },
    MainPage: {
        screen: MainPage
    },
});



