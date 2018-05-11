import React, {Component} from 'react';
import {
    Image,
    Text, TouchableOpacity,
    View
    , Dimensions
} from 'react-native';

import {createStackNavigator} from "react-navigation"
import {SCREEN_WIDTH} from "../../utils/Constant";

export default class HotPage extends Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#267',
        },
        headerTitle: "近10分钟热门商品",
        headerTintColor: '#fff',
        headerTitleStyle: {
            flex: 1,
            fontSize: 20,
            textAlign: "center",
        },
        headerBackTitle: "返回",
        headerRight: null,
    };
    render() {
        const { state,goBack } = this.props.navigation;
        return (

            <View>
                <Text onPress={()=>{
                    goBack();
                }
                    }>返回</Text>
            </View>

        );
    }
}



