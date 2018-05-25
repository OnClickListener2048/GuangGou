/**
 *this is fucking created by wangxin in fucking 2018/5/24 bitches
 */

import React, {Component} from "react";
import {ActivityIndicator, Text, View} from "react-native";

const LoadingView = (props) => {

    const {location, text} = props;
    switch (location) {
        case "center":
            return (<View style={{
                flex: 1,
                alignContent: "center",
                flexDirection: "column",
            }}>
                <ActivityIndicator size={"large"}/>
                {text&&<Text style={{
                    marginTop: 5,
                }}>{text}</Text>}
            </View>);

        case "top":
            return (<View style={{
                flex: 1,
                alignContent: "flex-start",
                flexDirection: "column",
            }}>
                <ActivityIndicator size={"large"}/>
                {text&&<Text style={{
                    marginTop: 5,
                }}>{text}</Text>}
            </View>);

        case "bottom":
            return (<View style={{
                flex: 1,
                alignContent: "flex-end",
                flexDirection: "column",
            }}>
                <ActivityIndicator size={"large"}/>
                {text&&<Text style={{
                    marginTop: 5,
                }}>{text}</Text>}
            </View>);
    }

};
export default LoadingView;