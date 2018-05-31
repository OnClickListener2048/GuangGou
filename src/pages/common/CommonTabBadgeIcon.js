/**
 *this is fucking created by wangxin in fucking 2018/5/31 bitches
 */

import React, {Component, PropTypes} from "react";
import {Image, View, Text, StyleSheet} from "react-native";

export default class CommonTabBadgeIcon extends Component {


    constructor(props) {
        super(props);

    }


    render() {
        const {normalImage, pressedImage, focused = false, num} = this.props;
        return (
            <View style={style.container}>
                {num && <View style={style.badge}>
                    <Text style={style.text}>{num}</Text>
                </View>}

                {focused ?
                    <Image
                        style={{
                            width: 30
                            , height: 30
                            ,
                        }}
                        source={{uri: pressedImage}}
                    /> : <Image
                        style={{
                            width: 30
                            , height: 30
                            ,
                        }}
                        source={{uri: normalImage}}
                    />}
            </View>
        )
    }
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        width: 45,
        alignItems:"center"
    },

    badge: {
        backgroundColor: "red",
        position: "absolute",
        right: 0,
        top: 0,
        borderRadius: 8,
        zIndex: 2,

    },

    text: {
        color: "white",
        fontSize: 11,
        marginLeft: 4.5,
        marginRight: 4.5,
    },

    tabIcon:{
        width: 30,
        height: 30,
    }


});