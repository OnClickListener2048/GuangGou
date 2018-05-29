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
                justifyContent: "center",
                flexDirection: "column",
            }}>
                <ActivityIndicator size={"large"}/>
                {text&&<Text style={{
                    marginTop: 5,
                    alignSelf: "center",
                }}>{text}</Text>}
            </View>);

        case "top":
            return (<View style={{
                flex: 1,
                justifyContent: "flex-start",
                flexDirection: "column",
            }}>
                <ActivityIndicator size={"large"}/>
                {text&&<Text  style={{
                    marginTop: 5,
                    alignSelf:"center"

                }}>{text}</Text>}
            </View>);

        case "bottom":
            return (<View style={{
                flex: 1,
                justifyContent: "flex-end",
                flexDirection: "column",
            }}>
                <ActivityIndicator size={"large"}/>
                {text&&<Text style={{
                    marginTop: 5,
                    alignSelf: "center",
                }}>{text}</Text>}
            </View>);
    }

};
export default LoadingView;