import React, {Component} from 'react';
import {
    Image,
    Text, TouchableOpacity,
    View,
    StyleSheet,
    AsyncStorage,
} from 'react-native';
import {SCREEN_WIDTH} from "../../utils/Constant";
import CommonStyles from "../../styles/CommonStyles";
import TopHeaderModal from "../modal/TopHeaderModal";
import TaoVerticalDrawerData from "./TaoVerticalDrawerData";
import CommonItemList from "../common/CommonItemList";
import LoadingView from "../common/LoadingView";

export default class TaoPage extends Component {

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
                fontSize: 20,
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

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            refreshing: false,
            data: {},
            loadMore: false,
        }
    }


    loadData() {
        let param = {
            count: 10,
            "country": "us",
        };

        HTTPBase.get("https://guangdiu.com/api/getlist.php", param)
            .then(response => {
                setTimeout(() => {
                    this.setState({
                        data: response.data,
                        loaded: true,
                        refreshing: false,
                    });

                    AsyncStorage.setItem("lastHotID", response.data[response.data.length - 1].id.toString(), (error) => {
                        error && alert(error);
                    });
                }, 1500)
            }).catch(error => {
            error && alert(error);
        });
    }

    componentDidMount() {
        this.loadData();
        this.props.navigation.setParams({
            _onTitlePress: this._onTitlePress
        })
    }

    _onTitlePress = () => {
        this.refs.top.onTitlePress();
    };

    onItemPressReload(item) {
        this.setState({
            refreshing: true,
        });
        let params = {};
        if (item.mall === "" && item.cate === "") {
            this.loadData();
            return;
        }

        if (item.mall === "") {
            params = {
                cate: item.cate,
            };
        } else {
            params = {
                mall: item.mall,
            };
        }

        HTTPBase.get("https://guangdiu.com/api/getlist.php", params)
            .then((response) => {
                setTimeout(() => {
                    this.setState({
                        data: response.data,
                        refreshing: false,
                    });
                    AsyncStorage.setItem("lastHotID", response.data[response.data.length - 1].id.toString(), (error) => {
                        error && alert(error);
                    });
                }, 1500);
            }).catch(error => {
            error && alert(error);
        });
    }


    _onRefresh = () => {
        this.setState({
            refreshing: true,
        });
        this.loadData();
    };

    _onEndReached = () => {
        AsyncStorage.getItem("lastHotID")
            .then((value) => {
                    let params = {"count": 10, "sinceid": value, "country": "us"};
                    this.setState({loadMore: true});
                    HTTPBase.get("https://guangdiu.com/api/getlist.php", params)
                        .then(responseData => {
                            setTimeout(() => {
                                this.setState({
                                    data: this.state.data.concat(responseData.data),
                                });
                            }, 2000);

                            AsyncStorage.setItem("lastHotID", this.state.data[this.state.data.length - 1].id.toString()
                                , (error) => {
                                    error && alert(error);
                                });
                        });
                }
            );
    }


    render() {
        return (

            <View>

                {this.state.loaded ? <CommonItemList data={this.state.data}
                                                     refreshing={this.state.refreshing}
                                                     onRefresh={this._onRefresh}
                                                     onEndReached={this._onEndReached}
                                                     navigation={this.props.navigation}
                    />
                    : <LoadingView location={"center"}/>}

                <TopHeaderModal ref="top"
                                data={TaoVerticalDrawerData}
                                onItemPressReload={(item) => this.onItemPressReload(item)}
                />
            </View>

        )
            ;
    }
}

