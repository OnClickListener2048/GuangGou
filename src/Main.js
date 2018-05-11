import {
    createBottomTabNavigator,
    createStackNavigator
} from "react-navigation";
import TaoPage from "./pages/taotao/TaoPage";
import TimeSquarePage from "./pages/timesquare/TimeSquarePage";
import MainPage from "./pages/main/MainPage";
import {
    TouchableOpacity
    , Image
} from "react-native"
import React, {Component} from 'react';
import {SCREEN_WIDTH} from "./utils/Constant";
import HotPage from "./pages/hot/HotPage";



const MainStack = createStackNavigator({
    MainPage: {
        screen: MainPage,
    },

});
const TaoStack = createStackNavigator({
    TaoPage: {
        screen: TaoPage,
    }
});
const TimeStack = createStackNavigator({
    TimeSquarePage: {
        screen: TimeSquarePage,
    }
});


const Main = createBottomTabNavigator({
        MainPage: {
            screen: MainStack,
            navigationOptions: {
                tabBarLabel: "首页"
                , tabBarIcon: ({tintColor = {}, focused}) => focused ? (
                        <Image style={{
                            width: 30
                            , height: 30
                            ,
                        }} source={
                            require("../src/res/tabbar_home_selected_30x30.png")
                        }/>
                    ) :
                    <Image style={{
                        width: 30
                        , height: 30
                        ,
                    }} source={
                        require("../src/res/tabbar_home_30x30.png")
                    }/>
            },
        },
        TaoPage: {
            screen: TaoStack,
            navigationOptions: {
                tabBarLabel: "淘淘"
                , tabBarIcon: ({tintColor = {}, focused}) => focused ? (
                    <Image style={{
                        width: 30
                        , height: 30
                        ,
                    }} source={
                        require("../src/res/tabbar_abroad_selected_30x30.png")
                    }/>
                ) : <Image style={{
                    width: 30
                    , height: 30
                    ,
                }} source={
                    require("../src/res/tabbar_abroad_30x30.png")
                }/>
            },
        },
        TimeSquarePage: {
            screen: TimeStack,
            navigationOptions: {
                tabBarLabel: "时代广场"
                , tabBarIcon: ({tintColor = {}, focused}) => focused ? (
                    <Image style={{
                        width: 30
                        , height: 30
                        ,
                    }} source={
                        require("../src/res/tabbar_rank_selected_30x30.png")
                    }/>
                ) : <Image style={{
                    width: 30
                    , height: 30
                    ,
                }} source={
                    require("../src/res/tabbar_rank_30x30.png")
                }/>
            },
        }
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        lazy: true,
        backBehavior: "none",
        TabNavigatorConfig: {
            backBehavior: "none",
        },
        animationEnabled: false,
        tabBarOptions: {
            activeBackgroundColor: 'white',
            activeTintColor: '#000000',
            inactiveBackgroundColor: 'white',
            inactiveTintColor: '#aaa',
            showIcon: true,
            showLabel: true,
            allowFontScaling: true,
        }
    });


export default Main;