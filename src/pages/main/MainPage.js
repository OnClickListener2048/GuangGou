/**
 * Created by dagou on 2018/5/9.
 */

import React, {Component} from 'react';
import {
    Image,
    Text, TouchableOpacity,
    View
    , Dimensions
} from 'react-native';
import {SCREEN_WIDTH} from "../../utils/Constant";

export default class MainPage extends Component {

    static navigationOptions = ({ navigation }) => {

        return {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitle: "逛丢",
            headerTintColor: '#fff',
            headerTitleStyle: {
                flex: 1,
                fontSize: 30,
                width: SCREEN_WIDTH,
                alignSelf: "center",
                textAlign: "center",
            },
            headerBackTitle: null,
            headerLeft: (<TouchableOpacity onPress={()=>navigation.navigate("HotPage")} >
                <Image style={{
                    width: 20,
                    height: 20,
                    marginLeft: 15,
                }}
                       source={require("../../res/hot_icon_20x20.png")}/>
            </TouchableOpacity>),

            headerRight: (
                <TouchableOpacity onPress={()=>navigation.navigate("SearchPage")}>
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
        }
    };


    render() {
        return (

            <View>
                <Text>MainPage</Text>
            </View>

        );
    }
}






