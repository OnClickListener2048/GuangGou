/**
 *this is fucking created by wangxin in fucking 2018/5/22 bitches
 */

import React, {Component} from "react";
import {
    FlatList,
    View,
    Image,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native";
import VerticalDrawerData from "./VerticalDrawerData";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../utils/Constant";

export default class VerticalDrawer extends Component {

    static defaultProps = {
        onVainPress: {},
        onItemPressReload: {},
    };

    onItemPress(item) {
        this.props.onVainPress();
        this.props.onItemPressReload(item);
    }

    renderItem = (item) => {

        return (
            <TouchableOpacity onPress={()=>this.onItemPress(item)} style={{
                flex: 1,
                width: SCREEN_WIDTH / 4,
                height: SCREEN_WIDTH / 4,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image style={{
                    width: 40,
                    height: 40,
                }} source={{
                    uri: item.image,
                }}/>
                <Text style={{
                    justifyContent: "center",
                    flex: 1,
                    flexDirection: "row",
                    width: SCREEN_WIDTH / 4,
                }}>{item.title}</Text>
            </TouchableOpacity>
        )
    };

    render() {
        return (
                <View style={{
                    marginTop: 56,
                    backgroundColor: "white",
                }}>
                    <FlatList
                        data={VerticalDrawerData}
                        renderItem={({item}) => this.renderItem(item)}
                        numColumns={4}
                        horizontal={false}
                    />
                </View>
        )
    }
};
   