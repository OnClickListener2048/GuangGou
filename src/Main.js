import {createBottomTabNavigator} from "react-navigation";
import TaoPage from "./pages/taotao/TaoPage";
import TimeSquarePage from "./pages/timesquare/TimeSquarePage";
import MainPage from "./pages/main/MainPage";
import {
    TouchableOpacity
    , Image
} from "react-native"
import React, {Component} from 'react';

const tintColor = "#000000";
const Main = createBottomTabNavigator({
        MainPage: {
            screen: MainPage,
            navigationOptions: {
                tabBarLabel: "首页"
                , tabBarIcon:({tintColor = {}, focused})=>focused? (
                    <TouchableOpacity>
                        <Image style={{
                            width: 30
                            , height: 30
                            ,
                        }} source={
                            require("../src/res/tabbar_home_selected_30x30.png")
                        }/>
                    </TouchableOpacity>
                ): <TouchableOpacity>
                    <Image style={{
                        width: 30
                        , height: 30
                        ,
                    }} source={
                        require("../src/res/tabbar_home_30x30.png")
                    }/>
                </TouchableOpacity>
            },
        },
        TaoPage: {
            screen: TaoPage,
            navigationOptions: {
                tabBarLabel: "淘淘"
                , tabBarIcon: (
                    <TouchableOpacity>
                        <Image style={{
                            width: 30
                            , height: 30
                            ,
                        }} source={
                            require("../src/res/tabbar_abroad_30x30.png")
                        }/>
                    </TouchableOpacity>
                )
            },
        },
        TimeSquarePage: {
            screen: TimeSquarePage,
            navigationOptions: {
                tabBarLabel: "时代广场"
                , tabBarIcon:(tabBarIcon)=> (
                    <TouchableOpacity>
                        <Image style={{  width: 30
                            , height: 30
                            ,}} source={
                            require("../src/res/tabbar_rank_30x30.png")
                        }/>
                    </TouchableOpacity>
                )
            },
        }
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
            activeBackgroundColor: 'white',
            activeTintColor: '#000000',
            inactiveBackgroundColor: 'white',
            inactiveTintColor: '#aaa',
            showLabel: true,
            allowFontScaling:true,
        }
    });


export default Main;