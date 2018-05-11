import React,{Component} from "react"
import {View, Text} from "react-native";


export default class SearchPage extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#267',
        },
        headerTitle: "搜索最热",
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
        return (
            <View>
                <Text>SearchPage</Text>
            </View>
        )
    }

};
