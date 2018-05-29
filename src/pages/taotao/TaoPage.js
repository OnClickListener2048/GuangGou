import React, { Component } from 'react';
import {
    Image,
    Text, TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';
import {SCREEN_WIDTH} from "../../utils/Constant";
import CommonStyles from "../../styles/CommonStyles";
import TopHeaderModal from "../modal/TopHeaderModal";
import TaoVerticalDrawerData from "./TaoVerticalDrawerData";

export default class TaoPage extends Component{

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitle: (
                <TouchableOpacity onPress={() => params._onTitlePress()}
                                  style={CommonStyles.commonHeaderTitle}>
                    <Image source={require("../../../src/res/navtitle_home_down_66x20.png")}/>
                </TouchableOpacity>
            ),
            headerTintColor: '#fff',
            headerTitleStyle: {
                flex: 1,
                fontSize: 30,
                width: SCREEN_WIDTH,
                alignSelf: "center",
                textAlign: "center",
            },
            headerBackTitle: null,
            headerLeft: (<TouchableOpacity onPress={() => navigation.navigate("HotPage")}>
                <Image style={{
                    width: 20,
                    height: 20,
                    marginLeft: 15,
                }}
                       source={require("../../res/hot_icon_20x20.png")}/>
            </TouchableOpacity>),

            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate("SearchPage")}>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: 15,
                        }}
                        source={require("../../res/search_icon_20x20.png")}/>
                </TouchableOpacity>
            ),
            gesturesEnabled: true,
        }
    };

    componentDidMount() {
        this.props.navigation.setParams({
            _onTitlePress: this._onTitlePress
        })
    }

    _onTitlePress = () => {
        alert("_onTitlePress");
        this.refs.top.onTitlePress();
    };

    onItemPressReload() {
        alert("onItemPressReload");
    }

    render(){
        return (

            <View>
                <TopHeaderModal ref="top"
                                data={TaoVerticalDrawerData}
                                onItemPressReload={(item)=> this.onItemPressReload(item)}
                />
            </View>

        );
    }
}

