import React, {Component} from "react"
import {
    View, Text
    , Image
    , StyleSheet
    , TextInput
    , TouchableOpacity
    , Dimensions
    , FlatList
    , ActivityIndicator
    , AsyncStorage
} from "react-native";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../utils/Constant";
import MainPageItem from "../main/MainPageItem";
import LoadingView from "../common/LoadingView";

const {width = SCREEN_WIDTH, height = SCREEN_HEIGHT} = Dimensions.get("window");

export default class SearchPage extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#267',
        },
        headerTitle: "搜索最热",
        headerTintColor: '#fff',
        headerTitleStyle: {
            flex: 1,
            fontSize: 20,
            textAlign: "center",
        },
        headerBackTitle: "返回",
        headerRight: (<Image/>),
    };


    constructor(props) {
        super(props);
        this.changeText = "";
    }

    state = {
        data: [],
        refreshing: false,
        loaded: false,
        loadMore: false,
        firstLoad: true,
    };

    loadData = () => {
        if (!this.changeText) return;

        let params = {
            "q": this.changeText,
            "count": "10",
        };
        this.setState({
            firstLoad: false,
            loaded: false,
        });
        HTTPBase.get("http://guangdiu.com/api/getresult.php", params)
            .then(response => {
                setTimeout(() => {
                    this.setState({
                        data: response.data,
                        loaded: true,
                    });
                }, 3000);

                let searchLastID = response.data[response.data.length - 1].id;
                AsyncStorage.setItem('searchLastID', searchLastID.toString());
            })

    };

    popupHome() {
        this.props.navigation.goBack();
    }

    onItemPress = (id) => {
        this.props.navigation.navigate("MainPageItemDetailsPage", {url: 'https://guangdiu.com/api/showdetail.php' + '?' + 'id=' + id});
    };

    _onEndReached = () => {
        AsyncStorage.getItem("searchLastID")
            .then((value) => {
                    let params = {"count": 10, "sinceid": value};
                    HTTPBase.get("https://guangdiu.com/api/getlist.php", params)
                        .then(responseData => {
                            setTimeout(() => {
                                this.setState({
                                    data: this.state.data.concat(responseData.data),
                                });
                            }, 2000);

                            AsyncStorage.setItem("searchLastID", this.state.data[this.state.data.length - 1].id.toString()
                                , (error) => {
                                    error && alert(error);
                                });
                        });
                }
            );
    };

    _onRefresh = () => {
        this.loadData();
    };

    render() {
        const {loaded, refreshing, data, firstLoad} = this.state;
        return (
            <View style={SearchStyles.container}>
                <View style={SearchStyles.searchArea}>
                    <View style={SearchStyles.inputArea}>
                        <Image style={SearchStyles.leftSearchIcon}
                               source={{uri: "search_icon_20x20"}}/>

                        <TextInput style={SearchStyles.textInput}
                                   keyboardType="default"
                                   placeholder="请输入搜索商品关键字"
                                   placeholderTextColor='gray'
                                   autoFocus={true}
                                   clearButtonMode="while-editing"
                                   onChangeText={(text) => {
                                       this.changeText = text
                                   }}
                                   onEndEditing={() => this.loadData(this)}
                                   underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <View style={SearchStyles.rightCancelArea}>
                        <TouchableOpacity onPress={() => this.popupHome(this)}>
                            <Text style={SearchStyles.rightCancel}>
                                取消
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {firstLoad ? null:(loaded ? <View style={SearchStyles.container}>
                    <FlatList contentContainerStyle={SearchStyles.root}
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
                                  return loaded ? <ActivityIndicator size="large" style={{
                                      marginTop: 5,
                                      marginBottom: 5
                                  }}/> : null;
                              }}
                              onEndReached={this._onEndReached}
                              onRefresh={this._onRefresh}
                              refreshing={refreshing}
                              onEndReachedThreshold={0.1}
                    />

                </View> : <LoadingView location={"top"} text={"加载中"}/>)}

            </View>
        );
    }

};
{/*<View style={{*/}
    {/*flex: 1,*/}
    {/*alignContent: "center",*/}
    {/*justifyContent: "center"*/}
{/*}}>*/}
    {/*<ActivityIndicator size="large"/>*/}
{/*</View>*/}

const SearchStyles = StyleSheet.create({
    container: {
        flex: 1,
    },

    root: {},

    searchArea: {
        height: 44,
        padding: 8,
        marginTop: 5,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: width,
    },

    inputArea: {
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(239,239,241,1.0)',
        marginLeft: 10,
        borderRadius: 5
    },

    textInput: {
        height: 40,
        width: width * 0.75,

    },

    leftSearchIcon: {
        width: 20,
        height: 20,
        marginLeft: 5,
    },

    rightCancel: {
        color: "green",
    },

    rightCancelArea: {
        flex: 1,
        alignItems: "center",
    },


});