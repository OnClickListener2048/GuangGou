import React, {Component} from "react";
import {
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
}
from "react-native";

const MainPageItem = (props) => {
    const {image, title, name, onPress = {}} = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={{uri:image}}/>
            <Text>{title}</Text>
            <Text>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    imageRight: {
        height:90,
        width:90,
    },
});