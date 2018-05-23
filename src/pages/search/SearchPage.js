import React, {Component} from "react"
import {
    View, Text
    , Image
    , StyleSheet
    , TextInput
    , TouchableOpacity
    , Dimensions
} from "react-native";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../utils/Constant";

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


    render() {
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
                                   onChangeText={(text) => {this.changeText = text}}
                                   onEndEditing={() => this.loadData()}
                                   underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <View style={SearchStyles.rightCancelArea}>
                        <TouchableOpacity>
                            <Text style={SearchStyles.rightCancel}>
                                取消
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        );
    }

};


const SearchStyles = StyleSheet.create({
    container: {
        flex: 1,
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
        alignItems:"center",
    },


});