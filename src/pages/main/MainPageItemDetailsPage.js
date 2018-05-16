/**
 *this is fucking created by wangxin in fucking 2018/5/16 bitches
 */

import React, {Component} from "react";
import {
    WebView,
    View,
    StyleSheet,
    Text,
} from "react-native";

export default class MainPageItemDetailsPage extends Component {

    render() {
        alert("MainPageItemDetailsPage" + this.props.navigation.getParam("url","noid"));
        return (
            this.props.id === null ? <Text>fucking no id!</Text> : <View style={{flex: 1}}>
                <WebView style={styleshit.webViewFuckingStyle}
                         source={{uri: this.props.navigation.getParam("url","noid"), method: "GET"}}
                         javaScriptEnabled={true}
                         domStorageEnabled={true}
                         scalesPageToFit={false}
                />
            </View>
        );
    }
}

const styleshit = StyleSheet.create({
    webViewFuckingStyle: {
        flex: 1,
    }
});