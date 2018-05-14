/**
 * Created by dagou on 2018/5/9.
 */

import React, {Component} from 'react';
import {
    Image,
    Text, TouchableOpacity,
    View
    , Dimensions
    ,FlatList
    ,StyleSheet
} from 'react-native';
import {SCREEN_WIDTH} from "../../utils/Constant";

export default class MainPage extends Component {

    static navigationOptions = ({ navigation }) => {

        return {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitle: "逛丢",
            headerTintColor: '#fff',
            headerTitleStyle: {
                flex: 1,
                fontSize: 30,
                width: SCREEN_WIDTH,
                alignSelf: "center",
                textAlign: "center",
            },
            headerBackTitle: null,
            headerLeft: (<TouchableOpacity onPress={()=>navigation.navigate("HotPage")} >
                <Image style={{
                    width: 20,
                    height: 20,
                    marginLeft: 15,
                }}
                       source={require("../../res/hot_icon_20x20.png")}/>
            </TouchableOpacity>),

            headerRight: (
                <TouchableOpacity onPress={()=>navigation.navigate("SearchPage")}>
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
    };

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {

        let params = {"count": 10};


        HTTPBase.get("https://guangdiu.com/api/getlist.php", params)
            .then(response => {

                this.setState({
                    data:response.data,
                });

            });
    };

    render() {
        const {data} = this.state;
        console.log(`data+++++++++++++++++++++${JSON.stringify(data)}`)
        return (

            <View>
                <FlatList contentContainerStyle={style.root}
                          data={data}
                          renderItem={({item}) =>(<Text style={{
                              width:30,
                              height:30,
                          }}>
                              {item.title}
                          </Text>)}
                          keyExtractor={(item)=>item.id}
                />
            </View>

        );
    }
}


const style = StyleSheet.create({
    root: {
        paddingHorizontal: 10
        ,width: 300
        ,height:500
        ,

    },

});



