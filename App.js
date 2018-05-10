/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import WelcomePage from "./src/pages/launch/WelcomePage";
import MainPage from "./src/pages/main/MainPage";

import React, {Component} from 'react';
import {
    YellowBox
    , Dimensions
    , Image
    , TouchableOpacity
} from 'react-native';
import {
    createStackNavigator
    ,
} from 'react-navigation';
import Main from "./src/Main";

const {height, width} = Dimensions.get("window");

export default createStackNavigator({
    Welcome: {
        screen: WelcomePage
    },
    MainPage: {
        screen: Main,

        navigationOptions: {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitle: "逛丢",
            headerTintColor: '#fff',
            headerTitleStyle: {
                flex: 1,
                fontSize: 30,
                width: width,
                alignSelf: "center",
                textAlign: "center",
            },
            headerBackTitle: null,
            headerLeft: (<TouchableOpacity>
                <Image style={{
                    width: 20,
                    height: 20,
                    marginLeft: 15,
                }}
                       source={require("./src/res/hot_icon_20x20.png")}/>
            </TouchableOpacity>),

            headerRight: (
                <TouchableOpacity>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: 15,
                        }}
                        source={require("./src/res/search_icon_20x20.png")}/>
                </TouchableOpacity>
            ),
            gesturesEnabled: true,
        },
        headerBackTitle: "shitty",
    },
}, {
    headerMode: "screen",
});


console.disableYellowBox = true;





