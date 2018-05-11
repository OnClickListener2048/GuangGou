import React, { Component } from 'react';
import {
    Image,
    Text, TouchableOpacity,
    View,
} from 'react-native';
import {SCREEN_WIDTH} from "../../utils/Constant";

export default class TaoPage extends Component{

    static navigationOptions = {
        title: 'TaoPage',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTitle: "TaoPage",
        headerTintColor: '#fff',
        headerTitleStyle: {
            flex: 1,
            fontSize: 30,
            width: SCREEN_WIDTH,
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
                   source={require("../../res/hot_icon_20x20.png")}/>
        </TouchableOpacity>),

        headerRight: (
            <TouchableOpacity>
                <Image
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: 15,
                    }}
                    source={require("../../res/search_icon_20x20.png")}/>
            </TouchableOpacity>
        ),
        gesturesEnabled: true,
    };

    render(){
        return (

            <View>
                <Text>TaoPage</Text>
            </View>

        );
    }
}