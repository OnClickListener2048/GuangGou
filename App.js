/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import WelcomePage from "./src/pages/launch/WelcomePage";
import HotPage from "./src/pages/hot/HotPage"
import React, {Component} from 'react';


import Main from "./src/Main";
import {
    createStackNavigator,
} from 'react-navigation';
import SearchPage from "./src/pages/search/SearchPage";
import MainPageItemDetailsPage from "./src/pages/main/MainPageItemDetailsPage";
import SettingPage from "./src/pages/timesquare/SettingPage";


export default createStackNavigator({
    Welcome: {
        screen: WelcomePage
    },
    Main: {
        screen: Main,
        navigationOptions: {
            header: null,
        },
    },
    HotPage: {
        screen: HotPage,
    },

    SearchPage: {
        screen: SearchPage,
    },

    MainPageItemDetailsPage:{
        screen:MainPageItemDetailsPage,
    },

    SettingPage:{
        screen: SettingPage,
    }


}, {
    headerMode: "screen",
});




console.disableYellowBox = true;





