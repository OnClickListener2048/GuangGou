/**
 * Created by dagou on 2018/5/9.
 */

import React, {Component} from 'react';
import {
    Image,
    Text, TouchableOpacity,
    View
    , Dimensions
    , FlatList
    , StyleSheet
    , ActivityIndicator
    , AsyncStorage
    , Modal
} from 'react-native';
import {SCREEN_WIDTH} from "../../utils/Constant";
import MainPageItem from "./MainPageItem";
import MainPageItemDetailsPage from "./MainPageItemDetailsPage";
import VerticalDrawer from "./VerticalDrawer";

export default class MainPage extends Component {


    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitle: (
                <TouchableOpacity onPress={() => params._onTitlePress()}
                                  style={style.middleTitleStyle}>
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

    state = {
        data: {},
        loaded: false,
        refreshing: false,
        loadMore: false,
        isVerticalDrawerAppears: false,
    };

    componentDidMount() {
        this.loadData();
        this.props.navigation.setParams({
            _onTitlePress: this._onTitlePress
        })
    }

    loadData = () => {
        let params = {"count": 10};

        this.setState({
            refreshing: true,
        });
        HTTPBase.get("https://guangdiu.com/api/getlist.php", params)
            .then(response => {

                this.setState({
                    data: response.data,
                    loaded: true,
                    refreshing: false,
                });

                AsyncStorage.setItem("lastID", response.data[response.data.length - 1].id.toString(), (error) => {
                    error && alert(error);
                });


            });
    };

    onItemPress = (id) => {
        // alert(`onItemPress---${id}`);
        console.log(`onItemPress---${id}`);
        this.props.navigation.navigate("MainPageItemDetailsPage", {url: 'https://guangdiu.com/api/showdetail.php' + '?' + 'id=' + id});
    };

    _onRefresh = () => {
        this.loadData()
    };

    onRequestClose = () => {
        this.setState({
            isVerticalDrawerAppears: false,
        });
        alert("onRequestClose");
    };


    _onTitlePress = () => {
        this.setState({
            isVerticalDrawerAppears: true,
        });
    };


    onVainPress() {
        this.setState({
            isVerticalDrawerAppears: false,
        });

        alert("onVainPress");
    }

    _onEndReached = () => {
        AsyncStorage.getItem("lastID")
            .then((value) => {
                    let params = {"count": 10, "sinceid": value};
                    this.setState({loadMore: true});
                    HTTPBase.get("https://guangdiu.com/api/getlist.php", params)
                        .then(responseData => {
                            setTimeout(() => {
                                this.setState({
                                    data: this.state.data.concat(responseData.data),
                                    loadMore: false,
                                });
                            }, 2000);

                            AsyncStorage.setItem("lastID", this.state.data[this.state.data.length - 1].id.toString()
                                , (error) => {
                                    error && alert(error);
                                });
                        });
                }
            );
    };

    render() {
        const {data, loaded, refreshing, loadMore} = this.state;
        console.log(`data+++++++++++++++++++++${JSON.stringify(data)}`)
        return (

            loaded ? <View style={style.container}>
                <FlatList contentContainerStyle={style.root}
                          data={data}
                          renderItem={({item}) => (<MainPageItem
                              image={item.image}
                              title={item.title}
                              name={item.mall}
                              id={item.id}
                              onPress={(id) => this.onItemPress(id)}
                          />)}
                          keyExtractor={(item) => item.id}
                          ListFooterComponent={() => {
                              return loadMore ? <ActivityIndicator size="large" style={{
                                  marginTop: 5,
                                  marginBottom: 5
                              }}/> : null;
                          }}
                          onEndReached={this._onEndReached}
                          onRefresh={this._onRefresh}
                          refreshing={refreshing}
                          onEndReachedThreshold={0.1}
                />
                <Modal
                    pointerEvents={"box-none"}
                    animationType="slide"
                    transparent={false}
                    onPress={this.onVainPress}
                    visible={this.state.isVerticalDrawerAppears}
                    onRequestClose={() => this.onRequestClose()}>

                    <VerticalDrawer style={{
                        backgroundColor:"red",
                    }}/>

                </Modal>
            </View> : <ActivityIndicator size="large" style={{marginTop: 15}}/>
        );
    }
}


const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
    },

    root: {},

    middleTitleStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },

});



