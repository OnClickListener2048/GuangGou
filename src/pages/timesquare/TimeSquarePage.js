import React, {Component} from 'react';
import {
    Image,
    Text, TouchableOpacity,
    View,
} from 'react-native';
import {SCREEN_WIDTH} from "../../utils/Constant";

export default class TimeSquarePage extends Component {

    static navigationOptions = ({navigation}) => {
        return ({
            title: 'Home',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitle: "小时风云榜",
            headerTintColor: '#fff',
            headerTitleStyle: {
                flex: 1,
                fontSize: 20,
                width: SCREEN_WIDTH,
                alignSelf: "center",
                textAlign: "center",
            },
            headerBackTitle: null,
            headerLeft: (<View/>),

            headerRight: (
                <TouchableOpacity onPress={()=>navigation.navigate("SettingPage")} >
                    <Text style={{
                        color: "white",
                        marginRight:10,
                        fontSize:18,
                    }}>
                        设置
                    </Text>
                </TouchableOpacity>
            ),
            gesturesEnabled: true,
        });

    };

    render() {
        return (

            <View>
                <Text>TimeSquarePage</Text>
            </View>

        );
    }
}

const style = StyleSheet.create({
    container:{

    },
});