import React, {Component} from "react";
import {
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
    View,
}
    from "react-native";
import {SCREEN_WIDTH} from "../../utils/Constant";

const MainPageItem = (props) => {
    const {image, title, name, onPress = {}} = props;

    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                    <Image style={styles.imageRight} source={{uri: image}}/>
                    <View style={styles.rightContainer}>
                        <Text style={styles.titleText}>{title}</Text>
                        <Text style={styles.titleName}>{name}</Text>
                    </View>
                    <Image style={styles.arrowRight} source={require("../../res/icon_cell_rightarrow.png")}/>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        width: SCREEN_WIDTH,
        height: 120,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        overflow:'hidden',
    },

    imageRight: {
        height: 90,
        width: 90,
    },

    rightContainer: {
        width: 200,
    },

    titleText: {
        color:"red",
        width: 200,
    },

    titleName: {
        color:"green",
        fontSize:12
    },

    arrowRight: {
        width:10,
        height:10,
        marginRight:30,
    },
});

export default MainPageItem;
