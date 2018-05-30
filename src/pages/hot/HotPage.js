import React, {Component} from 'react';
import {
    Image
    , Text
    , TouchableOpacity
    , View
    , Dimensions
    , StyleSheet
} from 'react-native';

import {createStackNavigator} from "react-navigation"
import {SCREEN_WIDTH} from "../../utils/Constant";
import CommonItemList from "../common/CommonItemList";
import LoadingView from "../common/LoadingView";

export default class HotPage extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#267',
            },
            headerTitle: "近10分钟热门商品",
            headerTintColor: '#fff',
            headerTitleStyle: {
                flex: 1,
                fontSize: 20,
                textAlign: "center",
            },
            headerBackTitle: "返回",
            headerRight: (<TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styleHot.back}>
                    返回
                </Text>
            </TouchableOpacity>),
            headerLeft: (<View/>)
        }

    };

    state = {
        data: [],
        refreshing: false,
        loaded: false,
    };

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        HTTPBase.get("http://guangdiu.com/api/gethots.php")
            .then(response => {

                setTimeout(() => {
                    this.setState({
                        loaded: true,
                        data: response.data,
                        refreshing: false,
                    });
                }, 1500);
            }).catch(
            (error) => {
                error && alert(error);
            }
        ).finally(() => {
        });
    };

    _onRefresh = () => {
        this.loadData();
    };

    _renderHeader = () => {

        return (
            <View style={styleHot.listHeader}>
                <Text>
                    根据每条折扣的点击进行统计,每5分钟更新一次
                </Text>

            </View>
        )
    };


    render() {
        return (
            <View style={styleHot.container}>

                {this.state.loaded ? <CommonItemList data={this.state.data}
                                                     refreshing={this.state.refreshing}
                                                     onRefresh={this._onRefresh}
                                                     renderHeader={this._renderHeader}
                                                     navigation={this.props.navigation}
                /> : <LoadingView location={"center"}/>}

            </View>
        );
    }
}
const styleHot = StyleSheet.create({

    container: {
        flex: 1,
    },

    back: {
        fontSize: 18,
        color: "white",
        marginRight: 10,
    },

    listHeader: {
        height:40,
        backgroundColor: "rgba(239,239,239,0.5)",
        width:SCREEN_WIDTH,
        justifyContent: "center",
        alignSelf: "center",
    },
});
