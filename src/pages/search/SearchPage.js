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
        super(props)

        this.changeText = "";


    }

    state = {
        data: [],
        refreshing: false,
        loaded: true,
        loadMore: false,
    };

    loadData() {
        alert(this);
        if (!this.changeText) return;

        let params = {
            "q": this.changeText,
        };

        this.setState({
            loaded: true,
        });
        HTTPBase.get("http://guangdiu.com/api/getresult.php", params)
            .then(response => {
                this.setState({
                    data: response.data,
                });

                let searchLastID = response.data[response.data.length - 1].id;
                AsyncStorage.setItem('searchLastID', searchLastID.toString());
            })

    }

    popupHome() {
        this.props.navigation.goBack();
    }

    onItemPress = () => {

    };

    _onEndReached = () => {

    };

    _onRefresh = () => {

    };

    render() {
        const {loaded, loadMore, refreshing, data} = this.state;
        alert(data);
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

                {loaded ?  <View style={SearchStyles.container}>
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

                </View> : <ActivityIndicator size="large" style={{marginTop: 15}}/>}

            </View>
        );
    }

};


const SearchStyles = StyleSheet.create({
    container: {
        flex: 1,
    },

    root:{

    },

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